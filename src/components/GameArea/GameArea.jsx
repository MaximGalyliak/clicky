import React, { Component } from "react";

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_score: 0,
      best_score: 0,
    };
  }
  render() {
    return <div style={{ height: 1000 }}>Game area</div>;
  }
}

export default GameArea;
