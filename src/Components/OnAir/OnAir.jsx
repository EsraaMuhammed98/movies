import React, { useContext, useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { airContext } from '../../Context/airContext';

export default function OnAir() {

 let {getOnAir}= useContext(airContext)
let[series,setSeries]=useState([])
let[days,setDays]=useState([])
let[pageCount,setPageCount]=useState(0)

 async function onAir(){
  let formates=[]
  for(let i =1 ; i <=6 ; i++){
    let currentDate = new Date();
    let {data} = await getOnAir(currentDate[i])
    var nextDate = new Date(currentDate);
 nextDate.setDate(currentDate.getDate() + i)
var formattedDate =
('0' + nextDate.getDate()).slice(-2)+
                      ((nextDate.toLocaleString('en-us',{month:'short'}))) 
                      // console.log(formattedDate)
                      
                      setSeries(data?.results)
                      setPageCount(data?.total_pages)
                      formates.push(formattedDate)
                    }
                    setDays(formates)
}
//    
let {data} = useQuery('OnAir',()=>onAir())

// console.log(data)
  return <>
    <h1>Series</h1>
    <div className="row text-center g-5">
      {/* <div className="col-md-6">Today</div> */}
      {days?.map((d)=><div className='col-md-2'>
        <p>{d}</p>
    
      {series?.map((s)=><div className='col-md-12   my-5' key={s.id}  >

<div className='movies'>
        <div className='moviesContent'>
          <h3 className='py-3'>{s.title}</h3>
          <p>{s.overview.split(' ').splice(0,20).join(' ')}</p>
          <div className="vote w-100 p-3 d-flex justify-content-between ">
            <p>{s.vote_average} <i className='rating fas fa-star'></i></p>
            <p>{s.vote_count} <i className="fa-solid fa-users"></i></p>
          </div>

          <Link to={`/details/${s.id}`} className={`mainBtn`}>Details</Link>
           
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${s.poster_path}`} className='w-100' />
      </div>
      </div>

)}
  </div>)}
  </div>
    {/* <div className="row g-5 my-5">
      {series?.map((s)=><div className='col-md-3' key={s.id}  >

      <div className='movies'>
              <div className='moviesContent'>
                <h3 className='py-3'>{s.title}</h3>
                <p>{s.overview.split(' ').splice(0,20).join(' ')}</p>
                <div className="vote w-100 p-3 d-flex justify-content-between ">
                  <p>{s.vote_average} <i className='rating fas fa-star'></i></p>
                  <p>{s.vote_count} <i className="fa-solid fa-users"></i></p>
                </div>

                <Link to={`/details/${s.id}`} className={`mainBtn`}>Details</Link>
                 
              </div>
              <img src={`https://image.tmdb.org/t/p/w500/${s.poster_path}`} className='w-100' />
            </div>
            </div>
 
      )} */}
        {/* <Pagination  pageCount={pageCount}/> */}
 
        
        
      
    {/* </div> */}

  </>
}
