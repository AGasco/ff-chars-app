import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">Extras</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
