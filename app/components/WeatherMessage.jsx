// init basic static component
var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;

    return(
      <h3>It's {temp} in {location}.</h3>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = WeatherMessage;
