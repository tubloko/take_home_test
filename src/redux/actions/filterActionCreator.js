import { SET_CITY, SET_STATE, SET_ZIP_CODE } from "../../constants";

export const setZipCodeAction = (payload) => ({ type: SET_ZIP_CODE, payload });
export const setCityAction = (payload) => ({ type: SET_CITY, payload });
export const setStateAction = (payload) => ({ type: SET_STATE, payload });
