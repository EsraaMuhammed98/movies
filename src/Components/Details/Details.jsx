import React from 'react';
import styles from './Details.module.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  let {id} = useParams();
let [details,setDetails]=useState(null)
  async function getMovieById(){
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3bde9c188c8dc343c58b1b3746de3316`)
    setDetails(data)
  }
  // https://api.themoviedb.org/3/tv/{series_id}

  async function getSeriesById(){
    let {data}= await axios.get(`https://api.themoviedb.org/3/tv/day?${id}?api_key=3bde9c188c8dc343c58b1b3746de3316`)
    setDetails(data)
  }
  useEffect(()=>{
  if(getMovieById){getMovieById()
  }else{getSeriesById()}
})
  return <>
  <div className="row   align-items-center">
    <div className="col-md-4">
      <div className="movie-img">
      <img src={`https://image.tmdb.org/t/p/w500/${details?.poster_path}`} className='w-100' alt={details?.title} />
      </div>
    </div>
    <div className="col-md-8">
      <h2>Name: {details?.title}</h2>
      <p><span className='fw-bolder mainColor'>Details:</span> {details?.overview}</p>

      <div className='d-flex '><span className='fw-bolder mainColor'>Genres:</span>
      {details?.genres.map((genres)=><p key={genres?.id} className='px-2'>{genres?.name}</p>)}
      </div>
 
      <div className='d-flex '><span className='fw-bolder mainColor'>Origin Country:</span>
      {details?.production_countries.map((Country)=><p key={Country.id} className='px-2'>{Country?.name} </p>)}
      </div>

      <p><span className='fw-bolder mainColor'>Original Language:</span> {details?.original_language}</p>
      <div className='d-flex '><span className='fw-bolder mainColor'>Spoken Languages:</span>
      {details?.spoken_languages.map((lang , index)=><p key={index} className='px-2'>{lang?.name} </p>)}
      </div>

      <div className="vote w-100 p-3 d-flex justify-content-between ">
                  <p>{details?.vote_average} <i className='rating fas fa-star'></i></p>
                  <p>{details?.vote_count} <i class="fa-solid fa-users"></i></p>
                </div>
  {details?.video ?window.location.href=details?.video :''}
<Link to='/series' className='mainBtn d-block w-100'>Back To Series</Link>
    </div>
  </div>
   </>
}
