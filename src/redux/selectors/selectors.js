const filterValue = (value, filterValue) => value.toLowerCase().startsWith(filterValue.toLowerCase());
export const selectCurrentPage = (state) => state.taxesReducer.currentPage;
export const selectTaxes = (state) => state.taxesReducer.entries;
export const selectFilteredTaxes = (state) => {
  const cityValue = getCityValue(state);
  const zipCodeValue = getZipCodeValue(state);
  const stateValue = getStateValue(state);

  return selectTaxes(state)
    .filter(({ zip_code }) => filterValue(zip_code, zipCodeValue))
    .filter(({ city }) => filterValue(city, cityValue))
    .filter(({ state }) => filterValue(state, stateValue));
}
export const selectCurrentTaxes = (state) => {
  const currentPage = selectCurrentPage(state) - 1;
  const currentData = selectFilteredTaxes(state);

  return currentData.slice(currentPage * 10, currentPage * 10 + 10);
}
export const selectFilteredTaxesLength = (state) => selectFilteredTaxes(state).length;

export const getIsLoading = (state) => state.taxesReducer.isLoading;

export const getCityValue = (state) => state.filterReducer.city;
export const getZipCodeValue = (state) => state.filterReducer.zipCode;
export const getStateValue = (state) => state.filterReducer.state;
