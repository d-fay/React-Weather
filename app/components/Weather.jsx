// init basic static component
var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function() {
    return(
      <div>
        <h3>Future Weather Component Content</h3>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = Weather;
