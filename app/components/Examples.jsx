// init basic static component
var React = require('react');

var Examples = React.createClass({
  render: function() {
    return(
      <h3>Future Examples Component Content</h3>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = Examples;
