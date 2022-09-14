import axios from "axios";
import { weatherApi } from "../constants/api";

let weather = new Promise(async (resolve, reject) => {
  await axios
    .get(`${weatherApi}`)
    .then((res) => {
      var location = res.data.area_metadata;
      var forecasts = res.data.items[0].forecasts;
      var location_weather = [];

      // create a weather and location array,
      // adding in cameras array so that traffic information can be pushed in later
      for (let i = 0; i < location.length; i++) {
        location_weather.push({
          name: location[i].name,
          latlong: location[i].label_location,
          weather: forecasts[i].forecast,
          cameras: [],
        });
      }

      // return weather and location array together with last update time
      const weatherInfo = {
        lastUpdate: res.data.items[0].update_timestamp,
        weather: location_weather,
      };
      resolve(weatherInfo);
    })
    .catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
});

export default weather;
