import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";


export default function WheatherApp(){
    let [weather , setweather] = useState({
        city:"Bhopal",
        feelslike: 21.63,
        humidity: 39,
        temp:22.32,
        tempMax: 22.32,
        tempMin: 22.32,
        weather: "clear sky"
    });


    let updateInfo = (result) => {
        setweather(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Wheather App by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weather}/>
        </div>
    )
}