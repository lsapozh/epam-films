import React, { Component } from "react";
import { NumberFilms, SortLine, SortParam } from "./components";
import { Row } from "components/UI";
import PropTypes from "prop-types";

const SearchInformation = ({ numberFilms, changeSortBy, sortBy }) => {
  return (
    <Row>
      <NumberFilms>{`${numberFilms} movies found`}</NumberFilms>
      <SortLine>
        <div>Sort by</div>
        <SortParam
          onClick={() => changeSortBy("year")}
          active={sortBy === "year"}
        >
          release date
        </SortParam>
        <SortParam
          onClick={() => changeSortBy("runtime")}
          active={sortBy === "runtime"}
        >
          runtime
        </SortParam>
      </SortLine>
    </Row>
  );
};

SearchInformation.propTypes = {
  numberFilms: PropTypes.number.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
};

export default SearchInformation;
