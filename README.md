# Clicky

    My implementation of Clicky game using React.js and Material-ui.

### Summary
    The app consist of 4 components <`Banner>`, `<AppBar>`, `<GameArea>` and `<ClickPic>`:
* Banner - simple 'dumb' component with name and background image;
* AppBar - component with its own state, 'sticky' menu bar with site logo and button "Rules" which calls dialog with rules of the game.
* GameArea - this is where all the magic happens. This component defines layout of child components, as well as holds state and methods that manage game logic. This component also generates `<ClickPic>` components from a array of images.


### Rules

    Clicky - is fun game to challenge and train your memory. The goal is to click on each image only once. Every time an image is clicked, all images will randomly shuffle. If you click on image twice the game will restart.

    Check it out [here](https://maximgalyliak.github.io/clicky/)

#### This app was created during the UC Davis Extension coding bootcamp.

