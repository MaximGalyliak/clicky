export default (score = 0, action) => {
  const { type } = action;
  switch (type) {
    case "INCREASE":
      return score + 1;
    case "RESET":
      return 0;
    default:
      return score;
  }
};
