import React, { Component } from "react";
import Game from "./Game";
import GameModal from "./GameModal";
import data from "./../data.json";

class Games extends Component {
  state = {
    curGame: null,
  };

  selectGame = (game) => {
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

    const rowsOfGames = [games.slice(0, 8), games.slice(8)];
    return (
      <div className="games">
        {rowsOfGames.map((games, i) => (
          <div className="games__row" key={i}>
            {games.map((game) => (
              <Game
                key={game.title}
                data={game}
                id={game.title}
                onSelect={() => this.selectGame(game)}
              />
            ))}
          </div>
        ))}
        {this.state.curGame && (
          <GameModal
            game={this.state.curGame}
            data={this.state.curGame}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default Games;
