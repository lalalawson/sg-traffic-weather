import { Col, DatePicker, Row, TimePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import convertToString from "../services/dateTimeConvert";

function DateTimeRow(props) {
  const [date, setDate] = useState(moment());
  const [time, setTime] = useState(moment());

  useEffect(() => {
    if (date && time) {
      props.changeTimestamp(convertToString(date, time));
    } else {
      props.changeTimestamp("");
    }
  }, [date, time]);

  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ width: "100%", padding: "0px 16px" }}
      gutter={[24]}
    >
      <Col span={12}>
        <div style={{ marginBottom: "4px" }}>Date</div>
        <DatePicker
          style={{ width: "100%" }}
          defaultValue={date}
          format="DD/MM/YYYY"
          onChange={setDate}
        />
      </Col>
      <Col span={12}>
        <div style={{ marginBottom: "4px" }}>Time</div>
        <TimePicker
          style={{ width: "100%" }}
          defaultValue={time}
          onChange={setTime}
        />
      </Col>
    </Row>
  );
}

export default DateTimeRow;
