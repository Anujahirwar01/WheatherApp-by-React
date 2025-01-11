import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infoBox.css"

export default function InfoBox({info}){
    const initialImage = "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={initialImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Feels Like = {info.feelslike}&deg;C </div>
          <div>Humidity = {info.humidity} </div>
          <div>Temperature = {info.temp}&deg;C </div>
          <div>Max Temperature = {info.tempMax}&deg;C </div>
          <div>Min Temperature = {info.tempMin}&deg;C </div>
          <div>Weather = {info.weather}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}