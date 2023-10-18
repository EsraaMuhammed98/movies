import React, { useContext, useEffect, useState } from 'react';
import styles from './Movies.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { moviesContext } from '../../Context/moviesContext';

export default function Movies( ) {

  let [movies , setMovies]=useState([])
  let [pageCount , setPageCount]=useState(0)
let {getMovies , getPages,search}=useContext(moviesContext)

  async function getAllMovies(){
    let data= await getMovies() 
    setMovies(data?.data.results)
        setPageCount(data?.data.total_pages)
  }
  async function getAllPages(selected){
    let data=await getPages(selected+1)
        setMovies(data?.data.results)
   }


 
  useEffect(()=>{
    getAllMovies()
    
   },[])
  return <>
     <div className="row g-5 my-5">
      {movies?.map((movie)=><div className='col-md-3' key={movie.id}  >
             <div className='movies'>
              <div className='moviesContent'>
                <h3 className='py-3'>{movie.title}</h3>
                <p>{movie.overview.split(' ').splice(0,20).join(' ')}</p>
                <div className="vote w-100 p-3 d-flex justify-content-between ">
                  <p>{movie.vote_average} <i className='rating fas fa-star'></i></p>
                  <p>{movie.vote_count} <i className="fa-solid fa-users"></i></p>
                </div>

                <Link to={`/details/${movie.id}`} className={`mainBtn ${styles.mainBtn}`}>Details</Link>
                 
              </div>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100' />
            </div>
            </div>

 
      )}
        <Pagination getAllPages={getAllPages} pageCount={pageCount}/>
 
        
        
      
    </div>
  </>
}
