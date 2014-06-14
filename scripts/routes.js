var React = require('react');
var RRouter = require('rrouter');

var Index     = require('./index');
var Another   = require('./another');

var Routes = RRouter.Routes;
var Route  = RRouter.Route;

module.exports = (
  <Routes path="harp-browserify-react-rrouter"/>
    <Route name="index" path="/" view={Index} />
    <Route name="another" path="/another.html" view={Another} />
  </Routes>
);
