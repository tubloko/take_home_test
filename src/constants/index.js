export const ADD_ENTRY = "ADD_ENTRY";
export const INIT_ENTRIES = "INIT_ENTRIES";
export const START_FETCH_ENTRIES = "START_FETCH_ENTRIES";

export const SET_ZIP_CODE = "SET_ZIP_CODE";
export const SET_CITY = "SET_CITY";
export const SET_STATE = "SET_STATE";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const columns = [
  {
    label: "ID",
    key: "id",
  },
  {
    label: "Zip Code",
    key: "zip_code",
  },
  {
    label: "City",
    key: "city",
  },
  {
    label: "City Rate",
    key: "city_rate",
  },
  {
    label: "State",
    key: "state",
  },
  {
    label: "State Name",
    key: "state_name",
  },
  {
    label: "State Rate",
    key: "state_rate",
  },
  {
    label: "County",
    key: "county",
  },
  {
    label: "County Rate",
    key: "county_rate",
  },
  {
    label: "Special",
    key: "special",
  },
  {
    label: "Combined Rate",
    key: "combined_rate",
    shorten: "Comb Rate",
  },
  {
    label: "Combined District Rate",
    key: "combined_district_rate",
    shorten: "CDR",
  },
];


