import { useEffect, useState } from "react";

function WeatherCard(props) {
  const [selected, setSelected] = useState(-1);
  const lastUpdate = props.data.weatherLastUpdate;
  const locations = props.data.locations;

  useEffect(() => {
    setSelected(props.selection);
  }, [props]);

  return (
    <div className="card">
      <h2>Weather</h2>
      {selected > -1 && (
        <>
          <span>{locations[selected].name}</span>
          <span>{locations[selected].weather}</span>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
