import { SET_CITY, SET_STATE, SET_ZIP_CODE } from "../../constants";


const initialState = {
  city: "",
  state: "",
  zipCode: "",
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CITY: {
      return { ...state, city: payload };
    }
    case SET_ZIP_CODE: {
      return { ...state, zipCode: payload };
    }
    case SET_STATE: {
      return { ...state, state: payload };
    }

    default: return state;
  }
};

export default filterReducer;
