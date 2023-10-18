import axios from "axios";
import { createContext } from "react";

export let moviesContext= createContext()

async function getMovies(){
   return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3bde9c188c8dc343c58b1b3746de3316`).then((res)=>res).catch((error)=>error)
  }

  async function getPages(page){
    return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3bde9c188c8dc343c58b1b3746de3316&page=${page}`).then((res)=>res).catch((error)=>error)
   
  }
  async function search(word){
    return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3bde9c188c8dc343c58b1b3746de3316&query=${word}`).then((res)=>res).catch((error)=>error)
   
  }


export default function MoviesContextProvider(props){
return <moviesContext.Provider value={{getMovies,getPages,search}}>

{props.children}

</moviesContext.Provider>
}