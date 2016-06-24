var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';
const OPEN_WEATHER_MAP_API_KEY = '14f1d80d987f367ab63ca4e72bdffafa';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function (response) {
        throw new Error(response.data.message);
    });
  }
}
