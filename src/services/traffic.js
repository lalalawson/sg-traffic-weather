import axios from "axios";
import { trafficApi } from "../constants/api";

let traffic = new Promise(async (resolve, reject) => {
  await axios
    .get(`${trafficApi}`)
    .then((res) => {
      // return cameras info together with last update time
      const trafficInfo = {
        lastUpdate: res.data.items[0].timestamp,
        cameras: res.data.items[0].cameras,
      };

      resolve(trafficInfo);
    })
    .catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
});

export default traffic;
