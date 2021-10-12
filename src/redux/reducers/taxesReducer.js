import { ADD_ENTRY, INIT_ENTRIES, SET_CURRENT_PAGE, START_FETCH_ENTRIES } from "../../constants";

const initialState = {
  entries: [],
  currentPage: 1,
  isLoading: false,
};

const taxesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ENTRY: {
      const entries = [ ...state.entries, payload ];
      return { ...state, entries };
    }
    case INIT_ENTRIES: {
      return { ...state, entries: payload, isLoading: false };
    }
    case START_FETCH_ENTRIES: {
      return { ...state, isLoading: true };
    }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    default: return state;
  }
};

export default taxesReducer;

