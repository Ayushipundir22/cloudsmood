import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const IMG_URL = "https://media.istockphoto.com/id/182438629/photo/delhi-roadway-pollution.jpg?s=2048x2048&w=is&k=20&c=fOT1iOJuz-VdYqJRiD6HoXz0T55j7aEp1dwE31gytm4="

    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=8ijy1ixq0ALEpJIt9D4ElKJzayexgzXTDG2ZRCYVfHQ=";

    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671462679356-15ed7a622434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
    <div className="infoBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Max Temp : {info.tempMax}&deg;C</p>
            <p>Min Temp : {info.tempMin}&deg;C</p>
            <p>Pressure : {info.pressure}</p>
            <p>Humidity : {info.humidity}</p>
            <p>The weather can be described as <i>{info.weather}</i> & Feels Like : {info.feelsLike}&deg;C</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}