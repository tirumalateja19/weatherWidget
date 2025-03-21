import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { rainy, summer, Winter, bright_day } from "../utils/constants";
import Shimmer from "./shimmer";

const Data = ({ wetData }) => {
  if (!wetData) {
    return <Shimmer />; // Display a loading message until data is available
  }
  const { temp_min, temp, feels_like, temp_max, humidity } = wetData.main;
  const { description } = wetData.weather[0];
  //   console.log(wetData);
  return (
    <>
      <div className=" flex justify-center mt-10">
        <Card className="w-[18vw]">
          <CardActionArea>
            <CardMedia
              component="img"
              className="max-h-48"
              image={
                temp > 28
                  ? summer
                  : temp < 12
                  ? Winter
                  : humidity > 75
                  ? rainy
                  : bright_day
              }
              alt="weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {wetData?.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
              >
                <p>Tempereture: {temp}&deg;</p>
                <p>Maximum Temp: {temp_max}&deg;</p>
                <p>Minimun Temp: {temp_min}&deg;</p>
                <p>Feels Liks: {feels_like}&deg;</p>
                <p>Humidity: {humidity}</p>
                <p>Description: {description}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};
export default Data;
