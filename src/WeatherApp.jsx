import { useState } from 'react';
import InfoBox from './infoBox';
import SearchBox from './SearchBox';
export default function WeatherApp(){ 
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Vizag",
        feelslike:24.84,
        temp:25.85,
        tempMin:25.85,
        tempMax:25.85,
        humidity:47, 
        feelslike: 24.84,
        weather:"haze",

    }); 
    let  updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}