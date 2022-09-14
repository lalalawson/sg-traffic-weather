import "./App.css";
import Navbar from "./components/Navbar";
import DateTimeRow from "./components/DateTimeRow";
import LocationCard from "./components/LocationCard";
import { useEffect, useState } from "react";
import retrieveTrafficAndLocation from "./services/aggregator";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          {!isLoading && <LocationCard data={data} />}
        </div>
      </div>
    </>
  );
}

export default App;
