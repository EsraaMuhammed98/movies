import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Movies from './Components/Movies/Movies';
import Details from './Components/Details/Details';
import MoviesContextProvider from './Context/moviesContext';
import SeriesContextProvider from './Context/seriesContext';
import Series from './Components/Series/Series';
import AirToday from './Components/AirToday/AirToday';
import PopularSeries from './Components/PopularSeries/PopularSeries';
import AirContextProvider from './Context/airContext';
import OnAir from './Components/OnAir/OnAir';
import Register from './Components/register/register';
function App() {
 let routes= createBrowserRouter([
  {path:'/' ,element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:'movies' , element:<Movies/>},
    {path:'series' , element:<Series/>},
    {path:'air-today' , element:<AirToday/>},
    {path:'popular' , element:<PopularSeries/>},
    {path:'on-air' , element:<OnAir/>},
    {path:'register' , element:<Register/>},
    {path:'details/:id' , element:<Details/>}
  ]
}
 ])
  
  return<><MoviesContextProvider>
<SeriesContextProvider>
  <AirContextProvider>

  <RouterProvider router={routes}></RouterProvider>
  </AirContextProvider>
</SeriesContextProvider>
  </MoviesContextProvider>
  
  
  
  
  </>



}

export default App;
