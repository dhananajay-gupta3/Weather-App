import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import icon from '../src/Assets/icon.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apikey = "31c3f1d3bd9d9c1bb86b7905de969bc8"
  const [inputCity, setinputcity] =useState("")
  const [data,setdata]=useState({})

  const getweatherDetails = (cityName)=>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
    axios.get(apiURL).then((res)=>{
      console.log("reponse", res.data)

      setdata(res.data)

    }).catch((err)=>{
      console.log("err",err)
    })
  
  }
  const handleinputchange = (e) =>{
    setinputcity(e.target.value)
  }

  const handlesearch = ()=>{
    getweatherDetails(inputCity)
    
  }



  useEffect(()=>{
    getweatherDetails("mumbai")
  },[])


  return (
    <div className='col-md-12'>
    <div className='weatherBg'>
    <h1 className='heading'>Weather App </h1>

    <div className='d-grid gap-3 col-4 mt-4'>
    <input type='text' className='form-control '
    value={inputCity}
    onChange={handleinputchange}/>
    <button className="btn btn-primary" type='button' onClick={handlesearch}>Search</button>
    </div>
    
    </div>


    <div className='col-md-12 text-centre mt-5'>
    <div className='shadow rounded weatherResultBox '>

    <img className='icon' src={icon} alt='weather'/>
    <h5 className='weathercity'>{data?.name}</h5>
    <h6 className='tem'>{((data?.main?.temp) -273.15).toFixed(2) }°C</h6>
    
    </div>
    </div>
     
    </div>
  );
}

export default App;
