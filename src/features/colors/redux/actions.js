import { ADD_COLOR } from "./reducer";

export const addColor = (color) => {
  return { type: ADD_COLOR, color };
};
