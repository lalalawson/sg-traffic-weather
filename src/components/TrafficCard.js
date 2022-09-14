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
          <Row
            align="center"
            justify="space-around"
            gutter={[16, 16]}
            style={{ padding: "24px" }}
          >
            {locations[selected].cameras.map((camera) => {
              return (
                <img key={camera.camera_id} src={camera.image} height="200px" />
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
}

export default TrafficCard;
