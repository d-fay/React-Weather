// init basic static component
var React = require('react');

var About = React.createClass({
  render: function() {
    return(
      <h3>Future About Component Content</h3>
    )
  }
});

// allows us to access this by loading it into other files using 'require'
module.exports = About;
