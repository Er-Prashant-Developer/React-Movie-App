import axios from "../../components/utils/axios";
import { loadperson } from "../reducers/personSlice";
export { removeperson } from "../reducers/personSlice";
export const asyncloadperson = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredit = await axios.get(`/person/${id}/combined_credits`);
    const tvCredit = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    const theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredit: combinedCredit.data,
      tvCredit: tvCredit.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadperson(theultimatedetails));
  } catch (error) {
    console.log(error);
  }
};
