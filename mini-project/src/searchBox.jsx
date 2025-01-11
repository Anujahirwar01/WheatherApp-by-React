import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searcgBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setcity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5772af4a542ae084ee3073196e56db94"

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    }

    

    let handlechange = (evt) => {
        setcity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        evt.preventDefault();
        console.log(city)
        setcity("");
     let newInfo =  await getWeatherInfo();
     updateInfo(newInfo);
    }

    return(
        <div id='search'>
            <form onSubmit={handleSubmit} action="">
            <TextField id="city" label="Search City" variant="outlined" required value={city} onChange={handlechange}/>
            <br /><br />
            <Button variant="contained" type="submit" >
        Search
      </Button>
            </form>
        </div>
    )
}