import React, { Component } from "react";
import Modal from "react-modal";
import "./../styles/GameModal.css";

class GameModal extends Component {
  state = {
    open: true,
    data: {
      title: "",
      releaseDate: "",
      platforms: [],
      synopsis: "",
      link: "",
    },
  };

  componentWillMount() {
    Modal.setAppElement(".game");
  }

  openModal = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div id="gameModal" className="gameModal">
        <Modal isOpen={this.state.open}>
          <p>All data of the game goes here</p>
          <button onClick={this.props.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default GameModal;
