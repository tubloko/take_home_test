import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@mui/material/Pagination";
import { selectFilteredTaxesLength, selectCurrentPage } from "../redux/selectors/selectors";
import { setCurrentPage } from "../redux/actions/taxesActionCreator";

const PaginationController = () => {
  const dispatch = useDispatch();
  const activePage = useSelector(selectCurrentPage);
  const count = useSelector(selectFilteredTaxesLength);
  const setActivePage = (number) => dispatch(setCurrentPage(number));

  return (
    <div style={{ marginBottom: '20px' }}>
      <Pagination
        color="secondary"
        onChange={(e, value) => setActivePage(value)}
        page={activePage}
        count={Math.ceil(count / 10)}
        size="large"
      />
    </div>
  );
}

export default PaginationController;
