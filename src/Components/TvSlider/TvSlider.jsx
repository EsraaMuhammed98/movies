import React, { useContext, useState } from 'react';
import styles from './TvSlider.module.css';
import { seriesContext } from '../../Context/seriesContext';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function TvSlider() {
  let {getSeries}=useContext(seriesContext)
let[series,setSeries]=useState([])
  async function getAllSeries(){
    let {data} = await getSeries()
    setSeries(data?.results)
  }
  
  let {data} = useQuery('SeriersSlider',getAllSeries)
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    arrows:false,
    slidesToScroll: 1
  };
  return <>
  
  <Slider {...settings}>
    {series?.map((bg)=><><div key={bg.id} className="movies">
    <img      src={`https://image.tmdb.org/t/p/w500/${bg.backdrop_path}`} className='w-100 ' alt="" />
      <div  className="moviesContent" >
    <Link     to={`/details/${bg.id}`} className='btn btn-outline-warning btn-sm w-100'>go</Link>
    </div>
      </div> 
    </>
    )}
        </Slider>
  </>
}
