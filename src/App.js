import "./App.css";
import Navbar from "./components/Navbar";
import DateTimeRow from "./components/DateTimeRow";
import LocationCard from "./components/LocationCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-body">
          <DateTimeRow />
          <LocationCard />
        </div>
      </div>
    </>
  );
}

export default App;
