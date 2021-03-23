export const ADD_COLOR = "ADD_COLOR";

export const colorsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COLOR:
      return state.concat([action.color]);
    default:
      return state;
  }
};
