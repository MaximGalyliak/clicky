import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const bkg = require("../../assets/img/bkg.jpg");

const Banner = () => {
  return (
    <Paper style={{ background: `url(${bkg})`, padding: "2rem" }}>
      <Typography variant="display2" align="center" color="secondary">
        Clicky game
      </Typography>
      {/* <Typography variant="display2" align="center" color="secondary">
        Fun memory training game! Click on an image to earn points, but don't
        click on any more than once!
      </Typography> */}
    </Paper>
  );
};

export default Banner;
