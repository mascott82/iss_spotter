const { nextISSTimesForMyLocation } = require('./iss');
nextISSTimesForMyLocation((error, data) => {
  data.forEach(element => {
    // Convert Unix timestamp to milliseconds by multiplying it by 1000
    const timestamp = element.risetime * 1000;
    console.log(`Next pass at ${new Date(timestamp).toString()} for ${element.duration} seconds!`);
  });
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