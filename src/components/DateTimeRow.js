import { Col, DatePicker, Row, TimePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

function DateTimeRow() {
  const [date, setDate] = useState(moment());
  const [time, setTime] = useState(moment());

  useEffect(() => {
    console.log(date);
    console.log(time);
  }, [date, time]);

  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ maxWidth: "800px", width: "80%" }}
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
          use12Hours
          format="h:mm a"
          defaultValue={time}
          onChange={setTime}
        />
      </Col>
    </Row>
  );
}

export default DateTimeRow;
