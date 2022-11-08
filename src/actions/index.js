export const increment = (num) => {
  return {
    type: "Increment",
    payload: num,
  };
};
export const decrement = (num) => {
  return {
    type: "Decrement",
    payload: num,
  };
};

export const multiply = (num) => {
  return {
    type: "Multiply",
    payload: num,
  };
};
