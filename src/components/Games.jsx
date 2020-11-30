import React, { Component } from "react";
import Game from "./Game";
import data from "./../data.json";
import "./../styles/Games.css";

class Games extends Component {
  state = {};
  render() {
    const { games } = data;

    const firstRowGames = games.slice(0, 8);
    const secondRowGames = games.slice(8);
    return (
      <div className="games">
        <div className="games__row">
          {firstRowGames.map((game) => {
            return <Game data={game} id={game.title} />;
          })}
        </div>
        <div className="games__row">
          {secondRowGames.map((game) => {
            return <Game data={game} id={game.title} />;
          })}
        </div>
      </div>
    );
  }
}

export default Games;
