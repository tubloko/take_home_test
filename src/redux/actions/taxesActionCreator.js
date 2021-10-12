import { INIT_ENTRIES, SET_CURRENT_PAGE, START_FETCH_ENTRIES } from "../../constants";

export const fetchTaxes = () => ((dispatch) => {
  (async () => {
    // The pagination should be implemented on the server side "...&limit=10&offset=0"
    const response = await fetch("https://api-prod.workhorsescs.pro/api/taxes");
    const data = await response.json();
    dispatch({ type: INIT_ENTRIES, payload: data.data });
  })();
});
export const startFetchTaxes = () => ({ type: START_FETCH_ENTRIES });
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload });
