import axios from "axios";
import { createContext } from "react";


export let airContext=createContext()

async function getAirToday() {
    return  await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=3bde9c188c8dc343c58b1b3746de3316&`)
    .then((res)=>res).catch((e)=>e)
  }

async function getOnAir(time) {
    return  await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=3bde9c188c8dc343c58b1b3746de3316&timezone=${time}`)
    .then((res)=>res).catch((e)=>e)
  }
async function getAirTodayPages(page) {
    return  await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=3bde9c188c8dc343c58b1b3746de3316&page=${page}`)
    .then((res)=>res).catch((e)=>e)

}
export default function AirContextProvider(props){
    return <airContext.Provider value={{getAirToday,getAirTodayPages,getOnAir}}>

{props.children}
    </airContext.Provider>
}