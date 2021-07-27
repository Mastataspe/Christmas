var express = require('express');
app = express();

app.get('/', function (req, res) {
  // current timestamp in milliseconds
  let dateObject = Date.now();

  // parse the date object
  let currentDate = new Date(dateObject);

  // current day
  let date = currentDate.getDate();

  // Determine the current month is string format
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
  let month = months[currentDate.getMonth()];

  // current year
  let year = currentDate.getFullYear();

  // create a Christmas date object based on the current  year
  let christmas = new Date(year, 11, 25);

  // Calculate how many days till Christmas
//   let daysTillChristmas = Math.floor((christmas.getTime() - currentDate.getTime()) / (1000*60*60*24));

    daysTillChristmas = 0;
  // Message
  var message = null;

  if (daysTillChristmas > 0){
    message = "There are " + daysTillChristmas + " days until Christmas.";
  } else {
    message = "Merry Christmas! 🎄 🎁"
  }

  // display today's date and the number of days till Christmas
  res.send('Today is ' + month + ' ' + date + ', ' + year + '.\n ' + message);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

