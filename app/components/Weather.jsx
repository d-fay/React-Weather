// init basic static component
var React = require('react');

var Weather = React.createClass({
  render: function() {
    return(
      <h3>Future Weather Component Content</h3>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = Weather;
