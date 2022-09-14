import { useEffect, useState } from "react";
import traffic from "../services/traffic";
import weather from "../services/weather";

function LocationCard() {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const retrieveWeatherInfo = async () => {
    await traffic
      .then((response) => {
        setWeatherInfo(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    retrieveWeatherInfo();
  }, []);

  return <div className="card">gello</div>;
}

export default LocationCard;
