import React from "react";
import Film from "components/Film";
import { NoFilmsFound } from "components/NoFilmsFound";
import { FilmsList } from "components/Films/components";
import PropTypes from "prop-types";

const Films = ({ films }) => {
  if (films.length === 0) {
    return <NoFilmsFound />;
  }
  return (
    <FilmsList>
      {films.map((film, id) => {
        return <Film key={id} film={film} />;
      })}
    </FilmsList>
  );
};

Films.propTypes = {
  films: PropTypes.array.isRequired
};

export default Films;
