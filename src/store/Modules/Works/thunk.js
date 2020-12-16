import { addWorks } from "./actions";
import axios from "axios";

export const addWorksThunk = (userId) => async (dispatch, getState) => {
  try {
    const user = await axios.get(`https://kenziehub.me/users/${userId}`);
    const userWorks = user.data.works;
    dispatch(addWorks(userWorks));
  } catch (err) {
    console.error(err);
  }
};
