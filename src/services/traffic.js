import axios from "axios";
import { trafficApi } from "../constants/api";

const retrieveTraffic = async (timestamp) => {
  return await axios
    .get(`${trafficApi}`)
    .then((res) => {
      // return cameras info together with last update time
      const trafficInfo = {
        lastUpdate: res.data.items[0].timestamp,
        cameras: res.data.items[0].cameras,
      };

      return trafficInfo;
    })
    .catch((err) => {
      return err;
    });
};

export default retrieveTraffic;
