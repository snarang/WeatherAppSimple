var wunderbar   = require('WeatherAppSimple');
var weather     = new wunderbar('26402167ced47ac1');

// weather alerts, geolocate from ip address
/*weather.alerts('autoip', function(err, res) {
    console.log(res);
});

// historical temperate average, city
weather.alerts('CA/San_Francisco', function(err, res) {
    console.log(res);
});
// 3-day forecast, US zip code
weather.forecast('CA/San_Francisco', function(err, res) {
    console.log(res);
});
*/

// current conditions, UK post code
weather.conditions('CA/San_Francisco', function(err, res) {
    console.log('City: '+res.current_observation.display_location.full +
    			'   Temperature: '+res.current_observation.temperature_string +
    			'   Weather:  '+res.current_observation.weather);
});

weather.conditions('CA/Campbell', function(err, res) {
    console.log('City: '+res.current_observation.display_location.full +
    			'   Temperature: '+res.current_observation.temperature_string +
    			'   Weather:  '+res.current_observation.weather);
});

weather.conditions('TX/Austin', function(err, res) {
    console.log('City: '+res.current_observation.display_location.full +
    			'   Temperature: '+res.current_observation.temperature_string +
    			'   Weather:  '+res.current_observation.weather);
});

weather.conditions('NE/Omaha', function(err, res) {
    console.log('City: '+res.current_observation.display_location.full +
    			'   Temperature: '+res.current_observation.temperature_string +
    			'   Weather:  '+res.current_observation.weather);
});

weather.conditions('MD/Timonium', function(err, res) {
    console.log('City: '+res.current_observation.display_location.full +
    			'   Temperature: '+res.current_observation.temperature_string +
    			'   Weather:  '+res.current_observation.weather);
});