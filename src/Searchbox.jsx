import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Searchbox.css";
import { useState } from "react"; 
export default function Searchbox({updateInfo}){
    let [City,setCity]=useState("");
     let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="514ebbc53b290be12d0ad6925db5a11e";

    let getWeatherinfo= async()=>{
        try
        {let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
    
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        let result = {
            City: City,         
              temp: jsonresponse.main.temp,
            temp_min: jsonresponse.main.temp_min,
              humidity: jsonresponse.main.humidity,
            temp_max: jsonresponse.main.temp_max,
           
            feelslike: jsonresponse.main.feels_like,
            weather: jsonresponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
        
};

    let handleChange= (evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit= async (evt)=>{
        try{
        evt.preventDefault();
        console.log(City);
        setCity("");
        let info= await getWeatherinfo();
        updateInfo(info);
        }
        catch(err){
            setError("city not found");
        }
    };
    return (
<div>
    <h3 style={{color:"black"}}>Search for the weather</h3>
    <form onSubmit={handleSubmit}>
 <TextField id="City" label="City name" variant="outlined" required value={City} onChange={handleChange}/>
   <br></br> <br></br>
 <Button variant="contained" type="submit">Search</Button>
 {error && <p style={{color:"Red"}}>no such place exists!</p>}
    </form>
<br></br>
  

</div>
    );
}