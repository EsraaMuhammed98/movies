import axios from "axios";
import { createContext } from "react";


export let seriesContext=createContext()

async function getSeries() {
    return await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=3bde9c188c8dc343c58b1b3746de3316&`).then((res)=>res).catch((e)=>e)
  }
async function getPopularSeries() {
    return await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=3bde9c188c8dc343c58b1b3746de3316&`).then((res)=>res).catch((e)=>e)
  }
async function getSeriesPages(page) {
    return await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=3bde9c188c8dc343c58b1b3746de3316&page=${page}`).then((res)=>res).catch((e)=>e)
  }
export default function SeriesContextProvider(props){
    return <seriesContext.Provider value={{getSeries,getPopularSeries,getSeriesPages}}>

{props.children}
    </seriesContext.Provider>
}