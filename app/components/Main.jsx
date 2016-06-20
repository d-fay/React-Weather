var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        // INSERT COMPONENT(S) TO DISPLAY
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;
