var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0938fd5cd13998636b036e81b63d88a3&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
        var errMsg; 

        if(res.response) {
            errMsg = res.response.data.message;
        } else {
            errMsg = res.message;
        }

        console.log(errMsg);
        throw new Error(errMsg);
    });

  }
}
