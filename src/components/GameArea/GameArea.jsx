import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ClickPick from "./ClickPic";

const images = [
  require("../../assets/img/one.jpg"),
  require("../../assets/img/two.jpg"),
  require("../../assets/img/three.jpg"),
  require("../../assets/img/four.jpg"),
  require("../../assets/img/five.jpg"),
  require("../../assets/img/six.jpg"),
  require("../../assets/img/seven.jpg"),
  require("../../assets/img/eight.jpg"),
  require("../../assets/img/nine.jpg"),
];

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_score: 0,
      best_score: 0,
      reset: false,
    };
  }

  increaseScore = () => {
    this.setState({
      current_score: this.state.current_score + 1,
      reset: false,
    });
  };

  resetScore = () => {
    if (this.state.current_score > this.state.best_score) {
      this.setState({
        best_score: this.state.current_score,
        current_score: 0,
        reset: true,
      });
    } else {
      this.setState({ current_score: 0, reset: true });
    }
  };

  shuffleElements = () => {
    var i = 0,
      j = 0,
      temp = null;

    for (i = images.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
  };

  render() {
    return (
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        style={{ marginTop: 24 }}
      >
        <Grid item md={4} xs={12}>
          <Typography variant="title">
            Current Score : {this.state.current_score}
            <br />
            Best Score : {this.state.best_score}
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid
            container
            justify="space-around"
            alignItems="flex-start"
            spacing={24}
          >
            {images.map((img, index) => {
              return (
                <Grid item xs={4} key={img}>
                  <ClickPick
                    img={img}
                    reset={this.state.reset}
                    increaseScore={this.increaseScore}
                    resetScore={this.resetScore}
                    shuffle={this.shuffleElements}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default GameArea;
