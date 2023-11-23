const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  passTimes.forEach(element => {
    // Convert Unix timestamp to milliseconds by multiplying it by 1000
    const datetime = new Date(element.risetime * 1000).toString();
    const duration = element.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.error("It didn't work: ", error.message);
  });