import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoading } from "../redux/selectors/selectors";

function Table({ columns, rows }) {
  const isLoading = useSelector(getIsLoading);

  if (isLoading) return (
    <progress className="progress is-medium is-dark" max="100">
      45%
    </progress>
  );

  return (
    <>
      <table className="table is-hoverable">
        <thead>
          <tr>
            {columns.map(({ key, label, shorten }) => (
							<th key={key}>
								{shorten
									? <><abbr title={label}>{shorten}</abbr></>
									: label
								}
							</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((item) => {
                  // There should not be any random keys, because of the performance, but only to clear browser console, I setup this.
                  return (
                    <td key={`${Math.floor(Math.random() * 123)}${item.key}`}>{row[item.key] || null} </td>
                  )
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

export default Table;
