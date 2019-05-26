import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import Films from "components/Films";
import { FavoriteFilmsHeader, Background } from "./components";
import Header from "components/Header";
import { Label } from "components/UI";
import { asyncLoadData } from "actions";

class FavoriteFilmsPage extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => this.props.dispatch(asyncLoadData());

  toHomePage = () => {
    this.props.dispatch(push(`/`));
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Background />
        <FavoriteFilmsHeader>
          <Header onClick={this.toHomePage} buttonName="SEARCH" />
          <Label>Your favorite films</Label>
        </FavoriteFilmsHeader>

        <Films films={this.props.favoriteFilms} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.favoriteFilms.isLoaded,
  favoriteFilms: state.favoriteFilms.films,
  favoriteList: state.favoriteFilms.favoriteList
});

export default connect(mapStateToProps)(FavoriteFilmsPage);
