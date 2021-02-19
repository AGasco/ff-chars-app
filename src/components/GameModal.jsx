import React, { Component } from "react";
import Modal from "react-modal";
import "./../styles/GameModal.css";

class GameModal extends Component {
  state = {
    open: true,
    // data: {
    //   title: "",
    //   releaseDate: "",
    //   platforms: [],
    //   synopsis: "",
    //   link: "",
    // },
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
    console.log(this.props.data);
    const { data } = this.props;
    return (
      <div id="gameModal" className="gameModal">
        <Modal isOpen={this.state.open}>
          <div className="gameModal__left">
            <div className="gameModal__leftTop">
              <img src={data.modalLogo} alt={data.title + "'s logo"} />
            </div>
            <div className="gameModal__leftBottom"></div>
          </div>
          <div className="gameModal__right">
            <img src={data.modal_bg} alt={data.title + "'s logo"} />
          </div>
          <button
            className="gameModal__closeBtn"
            onClick={this.props.closeModal}
          >
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

export default GameModal;
