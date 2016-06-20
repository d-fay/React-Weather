// init basic static component
var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return(
      <div>
        <form>
          <input type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = WeatherForm;
