import React,{useEffect, useState} from 'react'
import './App.css';
import App1 from './components/Header.js'
import Home from './components/Homebar.js'
import Fodkartcontainer from './components/Fodkartcontainer.js';

export const BASE_URL ="http://localhost:9000";
 

function App() {

  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

 
  

  useEffect( () =>
  {
    const fetchFoodData = async() =>{
      setLoading(true);
      try{
      const response = await fetch(BASE_URL);
  
      const json = await response.json();
      
  
      setData(json);
      setLoading(false);
  
    } catch (error){
      setError("Unable to fetch");
    }
   }
   fetchFoodData();
  },[]);
  
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading......</div>

  return (
    <>
      <App1/>
      <Home/>
      <div className="imgbg">
        <Fodkartcontainer data={data}/>
      </div>
    </>
  );
};

export default App;

