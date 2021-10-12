import React from 'react';
import InputField from "./InputField";
import { setCityAction, setStateAction, setZipCodeAction } from "../redux/actions/filterActionCreator";
import {useDispatch, useSelector} from "react-redux";
import {getCityValue, getStateValue, getZipCodeValue} from "../redux/selectors/selectors";

const SearchFilterForm = () => {
  const dispatch = useDispatch();
  const cityValue = useSelector(getCityValue);
  const stateValue = useSelector(getStateValue);
  const zipCodeValue = useSelector(getZipCodeValue);

  const setZipCode = (e) => dispatch(setZipCodeAction(e.target.value));
  const setState = (e) => dispatch(setStateAction(e.target.value));
  const setCity = (e) => dispatch(setCityAction(e.target.value));

  return (
    <div className="level">
      <InputField
        label="Zip Code"
        value={zipCodeValue}
        onChange={setZipCode}
      />
      <InputField
        label="City"
        value={cityValue}
        onChange={setCity}
      />
      <InputField
        label="State"
        value={stateValue}
        onChange={setState}
      />
    </div>
  );
}

export default SearchFilterForm;
