// to convert moment datetime to correct string format for api
function convertToString(date, time) {
  var dateStr =
    date.year() +
    "-" +
    padZero(date.month() + 1) +
    "-" +
    padZero(date.date()) +
    "T";
  var timeStr =
    padZero(time.hour()) +
    ":" +
    padZero(time.minutes()) +
    ":" +
    padZero(time.seconds());
  return dateStr + timeStr;
}

function padZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// convert the DT String to something more readable
function formatDate(datetime) {
  var year = datetime.slice(0, 4);
  var month = datetime.slice(5, 7);
  var day = datetime.slice(8, 10);
  var time = datetime.slice(11, 19);
  return day + "/" + month + "/" + year + " " + time;
}

export { convertToString, formatDate };
