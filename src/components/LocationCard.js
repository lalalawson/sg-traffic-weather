import { Row, Select } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const { Option } = Select;

function LocationCard(props) {
  const locations = props.data.locations;
  const [isDtSelected, setIsDtSelected] = useState(true);

  useEffect(() => {
    setIsDtSelected(props.isDtSelected);
  }, [props]);

  const onChange = (value) => {
    props.updateSelection(value);
  };

  return (
    <div className="card">
      <h2>Locations</h2>
      {isDtSelected && (
        <>
          <span style={{ color: "gray" }}>
            Choose or Search for a location below and we'll retrieve the weather
            and surrounding traffic data!
          </span>
          <div style={{ width: "100%" }}>
            <Select
              showSearch
              placeholder="Select a location"
              style={{ width: "100%", marginTop: "6px" }}
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {locations.map((location, index) => {
                return (
                  <Option key={index} value={index}>
                    {location.name}
                  </Option>
                );
              })}
            </Select>
          </div>{" "}
        </>
      )}
      {!isDtSelected && (
        <>
          <Row align="middle">
            <ExclamationCircleOutlined />
            <span style={{ marginLeft: "4px" }}>
              Select date and time first.
            </span>
          </Row>
        </>
      )}
    </div>
  );
}

export default LocationCard;
