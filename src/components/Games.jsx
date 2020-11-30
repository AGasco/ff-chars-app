import React, { Component } from "react";
import Game from "./Game";
import GameModal from "./GameModal";
import data from "./../data.json";
import "./../styles/Games.css";

class Games extends Component {
  state = {
    curGame: null,
  };

  selectGame = (game) => {
    console.log(game);
    this.setState({
      curGame: game,
    });
  };

  closeModal = () => {
    this.setState({
      curGame: null,
    });
  };

  render() {
    const { games } = data;

    const firstRowGames = games.slice(0, 8);
    const secondRowGames = games.slice(8);
    return (
      <div className="games">
        <div className="games__row">
          {firstRowGames.map((game) => {
            return (
              <Game
                key={game.title}
                data={game}
                id={game.title}
                onSelect={() => this.selectGame(game)}
              />
            );
          })}
        </div>
        <div className="games__row">
          {secondRowGames.map((game) => {
            return (
              <Game
                key={game.title}
                data={game}
                id={game.title}
                onSelect={() => this.selectGame(game)}
              />
            );
          })}
        </div>
        {this.state.curGame && (
          <GameModal game={this.state.curGame} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default Games;
