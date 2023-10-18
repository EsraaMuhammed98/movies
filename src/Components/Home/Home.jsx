import React, { useContext, useEffect, useState } from 'react';
import styles from './Home.module.css';
import Slider from "react-slick";
import { moviesContext } from '../../Context/moviesContext';
import { Link } from 'react-router-dom';
import TvSlider from '../TvSlider/TvSlider';

export default function Home() {
let[bg,setBg]=useState('')


  let {getMovies} =useContext(moviesContext)
let [movies , setMovies] = useState([])
  async function getAllMovies(){
    let {data} = await getMovies()
    console.log(data.results[0].backdrop_path)
    // ackdrop_path
setMovies(data?.results)
  }

 useEffect(() => {
   
   getAllMovies()
 }, [])
  
  var mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,

    slidesToScroll: 1
  };
  var poularMoviesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    arrows:true,

    slidesToScroll: 1
  };
  return <>
  <Slider {...mainSettings}>
    {movies?.map((bg)=><img key={bg.id} src={`https://image.tmdb.org/t/p/w500/${bg.backdrop_path}`} className='w-100 img' alt="" />)}
        </Slider>

<TvSlider/>


<div className='popularMovies'>
  <h6>Popular Movies</h6>
  <Slider {...poularMoviesSettings}>
    {movies?.map((bg)=>
     <div className={`${styles.movies} card`}>
      
<img key={bg.id} src={`https://image.tmdb.org/t/p/w500/${bg.backdrop_path}`} className='w-100' alt="" />
      <div className={styles.blur}></div>

<div className={`${styles.moviesContent} card-footer`}>
<h3 className=' fs-5'>{bg.title}</h3>
                <div className="vote w-100 d-flex justify-content-between ">
                  <p>{bg.vote_average} <i className='rating fas fa-star'></i></p>
                  <p>{bg.vote_count} <i className="fa-solid fa-users"></i></p>
                </div>

                {/* <Link to={`/details/${bg.id}`} className={`mainBtn ${styles.mainBtn}`}>Details</Link> */}
                 
    
</div>
    </div>
    
    )}
    
        </Slider>
</div>
  </>
}
