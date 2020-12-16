import { addTechs } from "./actions";
import axios from "axios";

export const addTechsThunk = () => async (dispatch, getState) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwNzkxMzgsImV4cCI6MTYwODMzODMzOCwic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.UkOuzr_QVX_fnLKLYYC8uGrSR1TVDnyukVvY0wQALQ0";

  try {
    const user = await axios.get(`https://kenziehub.me/profile`, {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });
    const userTechs = user.data.techs;
    dispatch(addTechs(userTechs));
  } catch (err) {
    console.error(err);
  }
};
