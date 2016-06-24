// init basic static component
var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Denver',
      temp: 92
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    })
  },
  render: function() {
    var {temp, location} = this.state;

    return(
      <div>
        <h3>Future Weather Component Content</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = Weather;
