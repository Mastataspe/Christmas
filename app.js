var express = require('express');
app = express();

app.get('/', function (req, res) {
  // current timestamp in milliseconds
  let dateObject = Date.now();

  // parse the date object
  let currentDate = new Date(dateObject);

  // current day
  let date = currentDate.getDate();

  // current month
  var month = null;

  // determine the current month in string format
  switch (currentDate.getMonth()) {
      case 0:
          month = 'January';
          break;
      case 1:
          month = 'February'
          break;
      case 2:
          month = 'March'
          break;
      case 3:
          month = 'April'
          break;
      case 4:
          month = 'May'
          break;
      case 5:
          month = 'June'
          break;
      case 6:
          month = 'July'
          break;
      case 7:
          month = 'August'
          break;
      case 8:
          month = 'September'
          break;
      case 9:
          month = 'October'
          break;
      case 10:
          month = 'November'
          break;
      case 11:
          month = 'December'
          break;
      default:
  }

  // current year
  let year = currentDate.getFullYear();

  // create a Christmas date object based on the current  year
  let christmas = new Date(year, 11, 25);

  // print date in Month DD, YYYY format
  // console.log("Today's date is " + month + " " + date + ", " + year + ".");

  // Calculate how many days till Christmas
  let daysTillChristmas = Math.floor((christmas.getTime() - currentDate.getTime()) / (1000*60*60*24));

  // print how many days till Christmas
  // console.log("There are " + daysTillChristmas + " until Christmas.");
  res.send('Today is ' + month + ' ' + date + ', ' + year + '.\n ' + 'There are ' + daysTillChristmas + ' days until Christmas.');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

