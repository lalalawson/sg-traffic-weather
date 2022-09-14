import { Row } from "antd";
import { useEffect, useState } from "react";

function TrafficCard(props) {
  const [selected, setSelected] = useState(-1);
  const lastUpdate = props.data.trafficLastUpdate;
  const locations = props.data.locations;

  useEffect(() => {
    setSelected(props.selection);
  }, [props]);

  return (
    <div className="card">
      <h2>Traffic Images</h2>
      {selected > -1 && (
        <>
          <span>{locations[selected].name}</span>
          <Row>
            {locations[selected].cameras.map((camera) => {
              return <img key={camera.camera_id} src={camera.image} />;
            })}
          </Row>
        </>
      )}
    </div>
  );
}

export default TrafficCard;
