import retrieveTraffic from "./traffic";
import retrieveWeather from "./weather";

// overall async function to tie all services together
// returns an array for all data at the selected timestamp
const retrieveTrafficAndLocation = async (timestamp) => {
  return Promise.all([retrieveWeather(timestamp), retrieveTraffic(timestamp)])
    .then((data) => {
      var weatherData = data[0];
      var trafficData = data[1];

      var finalData = {
        weatherLastUpdate: weatherData.lastUpdate,
        trafficLastUpdate: trafficData.lastUpdate,
        locations: assignCameras(trafficData.cameras, weatherData.weather),
      };

      return finalData;
    })
    .catch((err) => {
      return err;
    });
};

// formula to find distance between 2 points
const distanceBetween = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  var dist = Math.sqrt(a * a + b * b);
  return dist;
};

// for a particular camera, find the nearest town name
// returns the index of the town found in the listOfLoc provided
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

// weatherLocList contains all town names and their latlongs,
// for each town, add all nearby traffic cameras into their list
const assignCameras = (cameraList, weatherLocList) => {
  var finalList = weatherLocList;
  for (let i = 0; i < cameraList.length; i++) {
    var toInsert = nearestLocation(cameraList[i].location, weatherLocList);
    finalList[toInsert].cameras.push(cameraList[i]);
  }
  return finalList;
};

export default retrieveTrafficAndLocation;
