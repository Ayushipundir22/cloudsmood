import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './searchbox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1222ae6c651d7d5c612a323f73828ae8";

    let getWeatherInfo = async() => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result = {
            city      : city,
            temp      : jsonResponse.main.temp,
            tempMin   : jsonResponse.main.temp_min,
            tempMax   : jsonResponse.main.temp_max,
            humidity  : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            pressure  : jsonResponse.main.pressure,
            weather   : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }  catch(err) {
            throw err;
        }
    }

    let handleInpChange = (event) => {
        setCity(event.target.value);
    }
    
    let handleSubmit = async(event) => {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="city name" variant="outlined" color="success" required 
        value={city} onChange={handleInpChange}/>
        <br />  <br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color : "red"}}>Place not found :/</p>}
        </form>
        </div>
    )
}