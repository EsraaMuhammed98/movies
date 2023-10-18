import React, { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import  SearchBar  from './SearchBar';
import { moviesContext } from '../../Context/moviesContext';

export default function Navbar() {
  let [movies , setMovies]=useState([])

  async function searchInMovies(){
    let data=await search()
      setMovies(data?.data.results)
        }
 let {search}= useContext(moviesContext)
  async function handleSearch(word){
    searchInMovies(word)
  }
  return <>
 <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container  flex-wrap">

    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="search my-3 d-flex w-100 justify-content-between">
  <Link className="navbar-brand text-center"  to="#">Movies <i className="fa-solid fa-film"></i></Link> 
  <input type="search" onChange={(e)=>handleSearch(e.target.value)} className=' form-control' placeholder='Search ....' />

  </div>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/movies' aria-current="page">Movies <span className="visually-hidden">(current)</span></Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" aria-current="page">Watch List <span className="visually-hidden">(current)</span></Link> 
        </li>
        <li className="nav-item position-relative">
   <Link className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    TV
  </Link> 

  <ul className="dropdown-menu text-center">
    <li>
  <Link className="dropdown-item" to='/series' aria-current="page">Tv SERIES  <span className="visually-hidden">(current)</span></Link> 
  </li>
    <li>
  <Link className="dropdown-item" to='/popular' aria-current="page">POPULAR SERIES  <span className="visually-hidden">(current)</span></Link> 
  </li>

        <li >
          <Link className="dropdown-item" to='/air-today' aria-current="page">Air Today  <span className="visually-hidden">(current)</span></Link> 
        </li>
        <li >
          <Link className="dropdown-item" to='/on-air' aria-current="page">On Air<span className="visually-hidden">(current)</span></Link> 
        </li>
  </ul>
        </li>
        
        
      </ul>
       
    </div>
   </div>
 </nav>
 
   </>
}
