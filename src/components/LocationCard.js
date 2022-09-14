import { message, Select } from "antd";

const { Option } = Select;

function LocationCard(props) {
  const locations = props.data.locations;

  const onChange = (value) => {
    console.log(`selected ${value}`);
    message.success(`hello ${value}`);
  };

  return (
    <div className="card" style={{ width: "100%" }}>
      <h2>Locations</h2>
      <span style={{ color: "gray" }}>
        Choose a location below and we'll retrieve the weather and surrounding
        traffic data!
      </span>
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
            <Option key={index} value={location.name}>
              {location.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default LocationCard;
