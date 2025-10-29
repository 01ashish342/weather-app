import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./infobox.css"
import { Link } from "react-router-dom";

export default function Infobox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
    let HOT_URL="https://media.istockphoto.com/id/453477435/photo/hot.webp?a=1&b=1&s=612x612&w=0&k=20&c=npTWFHlgMQW_VdZ35cszLa3-DIe0gmwtEaIYWpWq-fU=";
    let COLD_URL="https://images.unsplash.com/photo-1572074449767-4fb7a5d20218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000";

    let RAIN_URL="https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";


    return (
        <div className="Infobox">
           
            <div className="cardcontainer">
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>30 ? HOT_URL : COLD_URL }
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}{info.humidity>80 ? <ThunderstormIcon/>: info.temp>30 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
<p>
Temprature={info.temp}&deg;C
</p>
<p>
    humidity={info.humidity}
</p>
<p>
    min_temp={info.temp_min}&deg;C
</p>
<p>
    max_temp={info.temp_max}
</p>
<p>
the weather can be described as<i> {info.weather}</i> and feels like {info.feelslike}&deg;C
</p>





        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small">Share</Button>
          <Link to="/about">
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
    </div>

        </div>

    );

}