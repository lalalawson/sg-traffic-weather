import traffic from "./traffic";
import weather from "./weather";

const retrieveWeatherData = weather;
const retrieveTrafficData = traffic;

let retrieveTrafficAndLocation = new Promise((resolve, reject) => {
  Promise.all([retrieveWeatherData, retrieveTrafficData])
    .then((data) => {
      var weatherData = data[0];
      var trafficData = data[1];

      var finalData = {
        weatherLastUpdate: weatherData.lastUpdate,
        trafficLastUpdate: trafficData.lastUpdate,
        locations: assignCameras(trafficData.cameras, weatherData.weather),
      };

      resolve(finalData);
    })
    .catch((err) => reject(err));
});

const distanceBetween = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  var dist = Math.sqrt(a * a + b * b);
  return dist;
};

const nearestLocation = (camLatLong, listOfLoc) => {
  var min = 0;
  var index = 0;
  for (let i = 0; i < listOfLoc.length; i++) {
    var currLoc = listOfLoc[i].latlong;
    var currDist = distanceBetween(
      camLatLong.latitude,
      camLatLong.longitude,
      currLoc.latitude,
      currLoc.longitude
    );
    if (i === 0) {
      min = currDist;
    }
    if (currDist < min) {
      min = currDist;
      index = i;
    }
  }
  return index;
};

const assignCameras = (cameraList, weatherLocList) => {
  var finalList = weatherLocList;
  for (let i = 0; i < cameraList.length; i++) {
    var toInsert = nearestLocation(cameraList[i].location, weatherLocList);
    finalList[toInsert].cameras.push(cameraList[i]);
  }
  return finalList;
};

export default retrieveTrafficAndLocation;
