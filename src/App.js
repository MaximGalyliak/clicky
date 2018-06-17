import React from "react";
//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/theme";
//custom
import Banner from "./components/Banner";
import MenuBar from "./components/MenuBar/MenuBar";
import GameArea from "./components/GameArea";

const App = () => {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Banner />
      <MenuBar />
      <GameArea />
    </MuiThemeProvider>
  );
};

export default App;
