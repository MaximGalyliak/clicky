import React, { Component } from "react";

const btn_style = {
  borderRadius: 10,
  boxShadow: "0 0 0 black",
  width: "100%",
};
const hover = {
  // border: "solid 2px #f4428c",
  boxShadow: "0 0 2rem #2d2d2d",
};

class ClickPick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isClicked: false,
    };
  }

  componentWillReceiveProps(next) {
    next.reset && this.setState({ isClicked: false });
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleClick = e => {
    e.preventDefault();
    if (!this.state.isClicked) {
      this.props.increaseScore();
      this.props.shuffle();
      this.setState({ isClicked: true });
    } else {
      this.props.resetScore();
    }
  };

  render() {
    return (
      <img
        src={this.props.img}
        alt="img"
        style={this.state.hover ? { ...btn_style, ...hover } : btn_style}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.handleClick}
      />
    );
  }
}
export default ClickPick;
