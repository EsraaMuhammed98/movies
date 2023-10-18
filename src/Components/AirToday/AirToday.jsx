import React, { useContext, useState } from 'react';
import styles from './AirToday.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { airContext } from '../../Context/airContext';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

export default function AirToday() {
let [air,setAir]=useState([])
let {getAirToday,getAirTodayPages}=  useContext(airContext)
let [pageCount,setPageCount]= useState(0)

async function airToday(){
let {data}= await getAirToday()
  setAir(data?.results)
  setPageCount(data?.total_pages)
}
async function airTodayPages(){
let {data}= await getAirTodayPages()
  setAir(data?.results)
}
let {data} = useQuery('airToday' , airToday)

return <>
  <div className="row g-5 my-5">
      {air?.map((A)=>
         
      <div className='col-md-3' key={A.id}  >
             <div className='movies'>
              <div className='moviesContent'>
                <h3 className='py-3'>{A.title}</h3>
                <p>{A.overview.split(' ').splice(0,20).join(' ')}</p>
                <div className="vote w-100 p-3 d-flex justify-content-between ">
                    <p>{A.vote_average} <i className='rating fas fa-star'></i></p>
                    <p>{A.vote_count} <i className="fa-solid fa-users"></i></p>
                  </div>

                 <Link to={`/details/${A.id}`} className={`mainBtn ${styles.mainBtn}`}>Details</Link>
                 
            </div>
               <img src={`https://image.tmdb.org/t/p/w500/${A.poster_path}`} className='w-100' />
             </div>
               </div>

 
      )}
        <Pagination airTodayPages={airTodayPages} pageCount={pageCount}/>
 
        
        
      
    </div> 
  </>
}
