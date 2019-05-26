import React, { Component } from "react";
import queryString from "query-string";
import FilmDetails from "components/FilmDetails";
import Films from "components/Films";
import { connect } from "react-redux";
import { asyncLoadData } from "containers/FilmPage/actions";

class FilmPage extends Component {
  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.filmId !== nextProps.filmId) {
      this.loadData(nextProps);
    }
  }

  loadData = props => {
    this.props.dispatch(asyncLoadData({ id: props.filmId }));
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <FilmDetails film={this.props.film} />
        <Films films={this.props.films} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoaded: state.filmPage.isLoaded,
  films: state.filmPage.films,
  film: state.filmPage.film,
  filmId: queryString.parse(ownProps.location.search).id
});

export default connect(mapStateToProps)(FilmPage);
