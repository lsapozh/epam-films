import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  Cast,
  Director,
  Info,
  InfoContainer,
  Plot,
  Poster,
  Rating,
  Row,
  Runtime,
  Title,
  Year,
  Film,
  Background
} from "./components";
import { Row as OtherFilms } from "components/UI";
import { Star } from "components/UI";
import Header from "components/Header";
import { push } from "react-router-redux";
import { updateFavoriteList } from "actions";

const FilmDetails = ({ film, onClick, updateFavoriteList, favoriteList }) => {
  return (
    <div>
      <Background />
      <Film>
        <Header onClick={onClick} buttonName="SEARCH" />

        <InfoContainer>
          <Poster src={film.posterUrl} />
          <Info>
            <Row>
              <Title>{film.title}</Title>
              <Rating>5</Rating>
              <Star
                onClick={updateFavoriteList({ id: film.id, favoriteList })}
                active={favoriteList.includes(film.id)}
              />
            </Row>
            <Row>
              <Year>{film.year}</Year>
              <Runtime>{film.runtime} min</Runtime>
            </Row>

            <Plot>{film.plot}</Plot>
            <Director>Director: {film.director}</Director>
            <Cast>Cast: {film.actors}</Cast>
          </Info>
        </InfoContainer>
      </Film>
      <OtherFilms>Films by {film.director}</OtherFilms>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  updateFavoriteList: PropTypes.func.isRequired,
  favoriteList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteFilms.favoriteList
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(push(`/`));
  },
  updateFavoriteList: ({ id, favoriteList }) => () => {
    dispatch(updateFavoriteList({ id, favoriteList }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
