import { Row } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
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
          <span>{locations[selected].weather}</span>
        </>
      )}
      {selected < 0 && (
        <Row align="middle">
          <ExclamationCircleOutlined />
          <span style={{ marginLeft: "4px" }}>No location selected yet.</span>
        </Row>
      )}
    </div>
  );
}

export default WeatherCard;
