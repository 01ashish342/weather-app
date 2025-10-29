import { useState } from "react";

import Searchbox from "./Searchbox.jsx";
import Infobox from "./infobox.jsx";



export default function WeatherApp(){

    const [weatherinfo,setweatherinfo]=useState({
        City:"delhi",
        feelslike: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
        weather:"haze"

    });

    let updateInfo=(info)=>{
        setweatherinfo(info);
    }

     const background = weatherinfo.temp > 30
        ? "linear-gradient(to bottom right, #ff7b00, #ffcc00)"
        : weatherinfo.humidity > 80
        ? "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)"
        : "linear-gradient(to bottom right, #00b4db, #0083b0)";
    
return (
 <div
            style={{
                minHeight: "100vh",
                background: background,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.6s ease-in-out",
                borderRadius: "10px"
            }}
        >
            <h2 style={{ color: "white", fontFamily: "Poppins", fontSize: "35px" }}>
                Weather App 🌤️
            </h2>

            <Searchbox updateInfo={updateInfo} />
            <Infobox info={weatherinfo} />
        </div>
);
}
