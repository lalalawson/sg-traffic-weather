import logo from "./logo.svg";
import "./App.css";
import { Col, DatePicker } from "antd";
import Navbar from "./components/Navbar";
import DateTimeRow from "./components/DateTimeRow";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-body">
          <DateTimeRow />
        </div>
      </div>
    </>
  );
}

export default App;
