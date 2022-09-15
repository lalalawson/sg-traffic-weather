import moment from "moment";

// to convert moment datetime to correct string format for api
function convertToString(date, time) {
  console.log("date");
  var dateStr =
    date.year() +
    "-" +
    padZero(date.month()) +
    "-" +
    padZero(date.date()) +
    "T";
  var timeStr =
    padZero(time.hour()) +
    ":" +
    padZero(time.minutes()) +
    ":" +
    padZero(time.seconds());
  console.log(dateStr + timeStr);
  return dateStr + timeStr;
}

function padZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

export default convertToString;
