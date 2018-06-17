import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ClickPick from "./ClickPic";

import { connect } from "react-redux";
import { increment, increaseScore, resetScore } from "../../action-creaters";

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
      reset: false,
    };
  }

  _resetScore = () => {
    this.props.resetScore();
    this.props.increment();
    this.setState({
      reset: true,
    });
  };
  _increaseScore = () => {
    this.props.increaseScore();
    this.setState({
      reset: false,
    });
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
            Current Score : {this.props.score}
            <br />
            Games Played: {this.props.count}
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
                    increaseScore={this._increaseScore}
                    resetScore={this._resetScore}
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
GameArea.propTypes = {
  score: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  resetScore: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  incerement: PropTypes.func.isRequired,
};
export default connect(
  state => ({ score: state.score, count: state.count }),
  { resetScore, increaseScore, increment }
)(GameArea);
