import "./App.css";
import Navbar from "./components/Navbar";
import DateTimeRow from "./components/DateTimeRow";
import LocationCard from "./components/LocationCard";
import { useEffect, useState } from "react";
import retrieveTrafficAndLocation from "./services/aggregator";
import WeatherCard from "./components/WeatherCard";
import { Col, Row, Space } from "antd";
import TrafficCard from "./components/TrafficCard";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(-1);

  const retrieveData = async () => {
    await retrieveTrafficAndLocation.then((res) => {
      setData(res);
      console.log(res);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-body">
          <DateTimeRow />
          {!isLoading && (
            <>
              <Row gutter={[16, 16]} style={{ padding: "0px 24px" }}>
                <Col xs={24} sm={12} md={12}>
                  <LocationCard data={data} updateSelection={setSelected} />
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <WeatherCard data={data} selection={selected} />
                </Col>
              </Row>
              <TrafficCard data={data} selection={selected} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
