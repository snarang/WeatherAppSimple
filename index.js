var request = require('superagent');

function WeatherAppSimple(apikey, lang) {
    // British English ;)
    if (lang === undefined)
        lang = 'LI'; 

    // stuff we need
    this.apikey = apikey;
    this.lang   = lang;
}
	
WeatherAppSimple.prototype.get = function(api, query, callback) {
    var url = encodeURI('http://api.wunderground.com/api/' + this.apikey + '/' + api + '/lang:' + this.lang + '/q/' + query + '.json');

    request
      .get(url)
      .set('Accept-Encoding', '')
      .end(function(err, res) {
        var obj = [];
        if (!err) {
            try {
                obj = JSON.parse(res.text);
            } catch(e) {
                err = true;
            }
        }

        callback(err, obj);
    });
};

// Basic data
WeatherAppSimple.prototype.alerts = function(query, callback) { this.get('alerts', query, callback); };
WeatherAppSimple.prototype.almanac = function(query, callback) { this.get('almanac', query, callback); };
WeatherAppSimple.prototype.astronomy = function(query, callback) { this.get('astronomy', query, callback); };
WeatherAppSimple.prototype.conditions = function(query, callback) { this.get('conditions', query, callback); };	
WeatherAppSimple.prototype.currenthurricane = function(query, callback) { this.get('currenthurricane', query, callback); };	
WeatherAppSimple.prototype.forecast = function(query, callback) { this.get('forecast', query, callback); };
WeatherAppSimple.prototype.forecast10day = function(query, callback) { this.get('forecast10day', query, callback); };
WeatherAppSimple.prototype.geolookup = function(query, callback) { this.get('geolookup', query, callback); };	

WeatherAppSimple.prototype.history = function(query, date, callback) {
    this.get('history_' + date, query, callback);
};

WeatherAppSimple.prototype.hourly = function(query, callback) { this.get('hourly', query, callback); };
WeatherAppSimple.prototype.hourly10day = function(query, callback) { this.get('hourly10day', query, callback); };	

WeatherAppSimple.prototype.planner = function(query, from, to, callback) {
    this.get('planner_' + from + to, query, callback);
};

WeatherAppSimple.prototype.rawtide = function(query, callback) { this.get('rawtide', query, callback); };
WeatherAppSimple.prototype.satellite = function(query, callback) { this.get('satellite', query, callback); }		
WeatherAppSimple.prototype.tide = function(query, callback) { this.get('tide', query, callback); }		
WeatherAppSimple.prototype.webcams = function(query, callback) { this.get('webcams', query, callback); };
WeatherAppSimple.prototype.yesterday = function(query, callback) { this.get('yesterday', query, callback); };

// AutoComplete API
/*
WeatherAppSimple.prototype.autocomplete = function(query, callback) {
};
*/

module.exports = WeatherAppSimple;
