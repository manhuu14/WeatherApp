import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"; 
import weatherImg from "./assets/5uw9_ampz_181008.jpg"; // ← adjust relative path if needed


export default function InfoBox({ info }) {  
    const INIT_URL ="/home/user/Documents/FULLSTACK/DELTAREACT/MINI-PROJECT/mini-project-react/src/assets/5uw9_ampz_181008.jpg";
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={weatherImg}
                        title="weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {info.temp}</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temp = {info.tempMin}</p>
                            <p>Max Temp = {info.tempMax}</p>
                            <p>The weather can be described as {info.weather} and feels like = {info.feelslike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

