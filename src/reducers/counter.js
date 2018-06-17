export default (count = 0, action) => {
  const { type } = action;
  switch (type) {
    case "INCRAMENT":
      return count + 1;

    default:
      return count;
  }
};
