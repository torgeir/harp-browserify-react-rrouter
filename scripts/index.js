var React = require('react');

var Menu = require('./menu');

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Menu/>
        <p>at index</p>
      </div>
    );
  }
});
