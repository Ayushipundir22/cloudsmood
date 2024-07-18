import SearchBox from './search-box';
import InfoBox from './infoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    p : "Wondering if it's a beach day or a movie day?",
    city : "Delhi",
    feelsLike : 39.05,
    humidity : 74,
    pressure : 996,
    temp : 32.05,
    tempMax : 32.05,
    tempMin : 32.05,
    weather : "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div>
            <h3>Cloudsmood!</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}