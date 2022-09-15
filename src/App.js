import "./App.css";
import Navbar from "./components/Navbar";
import DateTimeRow from "./components/DateTimeRow";
import LocationCard from "./components/LocationCard";
import { useEffect, useState } from "react";
import retrieveTrafficAndLocation from "./services/aggregator";
import WeatherCard from "./components/WeatherCard";
import { Col, Row, Space, Spin } from "antd";
import TrafficCard from "./components/TrafficCard";
import moment from "moment";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [timestamp, setTimestamp] = useState(moment());

  const retrieveData = async (timestamp) => {
    await retrieveTrafficAndLocation(timestamp).then((res) => {
      setData(res);
      console.log(res);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    retrieveData(timestamp);
  }, [timestamp]);
  console.log(timestamp);
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-body">
          <DateTimeRow changeTimestamp={setTimestamp} />
          {isLoading && <Spin size="large" />}
          {!isLoading && (
            <div style={{ width: "100%" }}>
              <Row gutter={[16, 16]} style={{ padding: "0px 24px" }}>
                <Col xs={24} sm={12} md={12}>
                  <LocationCard data={data} updateSelection={setSelected} />
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <WeatherCard data={data} selection={selected} />
                </Col>
              </Row>
              <Row
                gutter={[16, 16]}
                style={{ padding: "0px 24px", marginTop: "16px" }}
              >
                <Col span={24}>
                  <TrafficCard data={data} selection={selected} />
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
