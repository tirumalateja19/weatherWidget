import TextField from "@mui/material/TextField";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { API_Key } from "../utils/constants";
import { API_url } from "../utils/constants";
import { useState } from "react";
import Button from "@mui/material/Button";
import Data from "./Data";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  // handleChange is updating the city state with the new value entered in the text field.

  let handleSubmit = (e) => {
    e.preventDefault();
    // e.preventDefault() method prevents the default action (like reloading the page)
    // console.log(city);
    setCity("");
    // console.log(city);
    // second console.log(city), you will still see the same current value of city as before.
    // This happens because state updates using React's setState (like setCity("")) are asynchronous. React batches state updates for performance optimization, meaning the change to city (setting it to an empty string) does not happen immediately
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    const data = await fetch(
      `${API_url}?q=${city}&appid=${API_Key}&units=metric`
    );

    const json = await data.json();
    setWeatherData(json);
    // console.log(json);
  };

  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="mt-10">
          <h1 className="text-xl font-semibold">
            Search for Weather{" "}
            <span>
              <CloudOutlinedIcon fontSize="large" color="primary" />
            </span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[10px]">
            <TextField
              id="city"
              label="City Name"
              onChange={handleChange}
              value={city}
              variant="outlined"
              onSubmit={handleSubmit}
              required
            />
          </div>
          <br></br>
          <Button type="submit" variant="outlined">
            Search
          </Button>
        </form>
        <Data wetData={weatherData} />
        {/* we cannot pass json directly as prop because it is local variable */}
      </div>
    </>
  );
}

export default App;
