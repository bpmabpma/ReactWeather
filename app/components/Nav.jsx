var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/">Get Weather</IndexLink>
      <Link to="/about">About</Link>
      <Link to="/example">Example</Link>
    </div>
  )
}

module.exports = Nav;
