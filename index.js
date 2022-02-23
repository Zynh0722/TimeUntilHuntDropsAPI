const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function timeToGo(s) {
  var now = new Date;
  var utc_timestamp = new Date(Date.UTC(now.getFullYear(),now.getMonth(), now.getDate() ,
      now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()));
  var diff = new Date(s.getTime() - utc_timestamp.getTime());


  out = '';
  out += diff.getHours() + " hours, ";
  out += diff.getMinutes() + " minutes, "
  out += diff.getSeconds() + " seconds"


  return out;
}

app.get('/', (req, res) => {
  let dropsTime = new Date('2022-02-23T16:00:00+0000');


  res.send('Hunt Drops in: ' + timeToGo(dropsTime));
});

app.listen(PORT, () => {
  console.log(`Time until Hunt Drops listening on port ${PORT}`);
});