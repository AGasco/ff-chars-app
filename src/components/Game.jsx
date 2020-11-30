import React, { Component } from "react";
import "./../styles/Game.css";

class Game extends Component {
  state = {
    isOpen: false,
    data: {
      title: "",
      releaseDate: "",
      platforms: [],
      synopsis: "",
      link: "",
    },
  };

  handleClick = () => {
    this.props.onSelect();
    this.setState({ isOpen: true });
    setTimeout(() => this.setState({ isOpen: false }), 500);
  };

  render() {
    const { title, logo } = this.props.data;
    return (
      <div
        className={`game hvr-ripple-out ${this.state.isOpen && "game__back"}`}
        onClick={this.handleClick}
      >
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
