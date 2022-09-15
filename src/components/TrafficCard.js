import { Empty, Row, Image } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { formatDate } from "../services/dateTimeConvert";

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
          <div className="datetimestr" style={{ marginTop: "-8px" }}>
            Last updated on {formatDate(lastUpdate)}
          </div>
          <Row
            align="center"
            justify="space-around"
            gutter={[16, 16]}
            style={{ padding: "24px" }}
          >
            {locations[selected].cameras.map((camera) => {
              return (
                <Image
                  key={camera.camera_id}
                  src={camera.image}
                  width="350px"
                  style={{ borderRadius: "var(--br-md)" }}
                />
              );
            })}
            {locations[selected].cameras.length === 0 && (
              <Empty
                description={`No nearby traffic images found at ${locations[selected].name}`}
              />
            )}
          </Row>
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

export default TrafficCard;
