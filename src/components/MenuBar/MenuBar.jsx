import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transion = props => {
  return <Slide direction="up" {...props} />;
};

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <AppBar position="sticky" color="default">
          <ToolBar>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="title" color="primary" align="left">
                  Clicky Game
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="title" color="primary" align="right">
                  <Button color="primary" onClick={this.handleClickOpen}>
                    Rules
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </ToolBar>
        </AppBar>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transion}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle id="alert-dialog-slide-title">{"Rules"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              There are nine images in total, click on each image once.
              <br />
              Every time an image is clicked, the images will shuffle.
              <br />
              To win the game you have to score nine points - one point per
              click.
              <br />
              If you click on image twice - you lost:)
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default MenuBar;
