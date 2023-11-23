const request = require('request-promise-native');

const fetchMyIP = function() {
  const targetUrl = 'https://api.ipify.org?format=json';
  return request(targetUrl);
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  const targetUrl = `http://ipwho.is/${ip}`;
  return request(targetUrl);
};

const fetchISSFlyOverTimes = function(body) {
  const lat = JSON.parse(body).latitude;
  const lon = JSON.parse(body).longitude;
  const targetUrl = `https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`;
  return request(targetUrl);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };