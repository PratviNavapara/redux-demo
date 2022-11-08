const initialState = 1;
const Updown = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;
    case "Multiply":
      return state * action.payload;
    default:
      return state;
  }
};

export default Updown;
