import React, { Component } from "react";
import PopPop from "react-poppop";

export default class Popped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow = (show) => {
    this.setState({ show });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button
          className="btn btn-default"
          onClick={() => this.toggleShow(true)}
        >
          Show Modal
        </button>
        <PopPop
          position="centerCenter"
          open={show}
          closeBtn={true}
          closeOnEsc={true}
          onClose={() => this.toggleShow(false)}
          closeOnOverlay={true}
        >
          <h1>title</h1>
          <p>content</p>
        </PopPop>
      </div>
    );
  }
}
