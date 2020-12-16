import { ADD_WORK } from "./actionsType";

const worksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WORK:
      console.log(state);
      return [...action.list];

    default:
      return state;
  }
};

export default worksReducer;
