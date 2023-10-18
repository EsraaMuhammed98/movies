import React, { useContext, useEffect, useState } from 'react';
import styles from './Series.module.css';
import { seriesContext } from '../../Context/seriesContext';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

export default function Series() {
 let {getSeries,getSeriesPages}= useContext(seriesContext)
let[series,setSeries]=useState([])
let[pageCount,setPageCount]=useState(0)

 async function getAllSeries(){
  let {data} = await getSeries()
setSeries(data?.results)
setPageCount(data?.total_pages)
}
 async function getAllSeriesPages(selected){
  let {data} = await getSeriesPages(selected+1)
setSeries(data?.results)
 }
let {data} = useQuery('series',getAllSeries)
// console.log(data)
  return <>
    <h1>Series</h1>
    <div className="row g-5 my-5">
      {series?.map((s)=><div className='col-md-3' key={s.id}  >

      <div className='movies'>
              <div className='moviesContent'>
                <h3 className='py-3'>{s.title}</h3>
                <p>{s.overview.split(' ').splice(0,20).join(' ')}</p>
                <div className="vote w-100 p-3 d-flex justify-content-between ">
                  <p>{s.vote_average} <i className='rating fas fa-star'></i></p>
                  <p>{s.vote_count} <i className="fa-solid fa-users"></i></p>
                </div>

                <Link to={`/details/${s.id}`} className={`mainBtn ${styles.mainBtn}`}>Details</Link>
                 
              </div>
              <img src={`https://image.tmdb.org/t/p/w500/${s.poster_path}`} className='w-100' />
            </div>
            </div>
 
      )}
        <Pagination getAllSeriesPages={getAllSeriesPages} pageCount={pageCount}/>
 
        
        
      
    </div>

  </>
}
