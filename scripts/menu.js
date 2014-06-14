var React = require('react');

var Link = require('rrouter').Link;

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Link to="index"><i className="bars"/> index</Link>
        <Link to="another"><i className="camera"/> another</Link>
      </div>
    );
  }
});
