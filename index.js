const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  passTimes.forEach(element => {
    // Convert Unix timestamp to milliseconds by multiplying it by 1000
    const datetime = new Date(element.risetime * 1000).toString();
    const duration = element.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(data);
});
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log('It worked! Return IP: ', ip);
// });

// fetchCoordsByIP("204.83.229.184", (error, data) => {
//   console.error(error);
//   console.log(data);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000'}, (error, data) => {
//   console.error(error);
//   console.log(data);
// });