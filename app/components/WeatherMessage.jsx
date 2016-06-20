// init basic static component
var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return(
      <h3>This will be the temperature data.</h3>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = WeatherMessage;
