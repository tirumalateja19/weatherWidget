import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Skeleton from "@mui/material/Skeleton";

const Shimmer = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Card sx={{ width: { xs: "90%", sm: "50%", md: "18vw" } }}>
          <CardActionArea>
            <Skeleton variant="rectangular" sx={{ height: 200 }} />
            <CardMedia
              component="img"
              sx={{ display: "none" }}
              image=""
              alt="weather placeholder"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                className="flex flex-col items-center"
              >
                <Skeleton width="80%" />
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
                className="flex flex-col items-center"
              >
                <Skeleton width="60%" />
                <Skeleton width="60%" />
                <Skeleton width="60%" />
                <Skeleton width="60%" />
                <Skeleton width="60%" />
                <Skeleton width="60%" />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Shimmer;
