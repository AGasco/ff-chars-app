import React, { Component } from "react";
import "./../styles/Game.css";

class Game extends Component {
  state = {
    title: "",
    releaseDate: "",
    platforms: [],
    synopsis: "",
    link: "",
  };

  render() {
    const { title, logo } = this.props.data;
    return (
      <div className="game hvr-ripple-out">
        <img
          id={this.props.id}
          className="game__logo"
          src={logo}
          alt={`${title}'s logo`}
        />
        <h3 className="game__title">{title}</h3>
      </div>
    );
  }
}

export default Game;
