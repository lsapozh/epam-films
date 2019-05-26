import React from "react";
import { ContainerFilm, Genres, Row, Poster, Title, Year } from "./components";
import { Star } from "components/UI";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { filmPath } from "Paths";
import { updateFavoriteList } from "actions";

const Film = ({ film, onClick, updateFavoriteList, favoriteList }) => {
  return (
    <ContainerFilm>
      <Poster
        src={film.posterUrl}
        onClick={onClick}
        alt={`${film.title} Poster`}
      />
      <Row onClick={onClick}>
        <Title>{film.title}</Title>
        <Year>{film.year}</Year>
      </Row>

      <Row>
        <Genres>
          {[...film.genres].slice(1).reduce((acc, f) => {
            return acc + " & " + f;
          }, film.genres[0])}
        </Genres>
        <Star
          onClick={updateFavoriteList({ id: film.id, favoriteList })}
          active={favoriteList.includes(film.id)}
        />
      </Row>
    </ContainerFilm>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  updateFavoriteList: PropTypes.func.isRequired,
  favoriteList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteFilms.favoriteList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(push(filmPath({ id: ownProps.film.id })));
  },
  updateFavoriteList: ({ id, favoriteList }) => () => {
    dispatch(updateFavoriteList({ id, favoriteList }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);
