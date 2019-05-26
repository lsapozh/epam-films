import React, { Component } from "react";
import queryString from "query-string";
import Searcher from "containers/Searcher";
import Films from "components/Films";
import SearchInformation from "components/SearchInformation";
import { connect } from "react-redux";
import { asyncLoadData } from "./actions";

class SearchPage extends Component {
  state = {
    sortBy: "year",
    findBy: "title",
    value: ""
  };

  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.loadData(nextProps);
    }
  }

  loadData = props => {
    const { findBy, value } = queryString.parse(props.location.search);
    const sortBy = this.state.sortBy;

    this.props.dispatch(asyncLoadData({ findBy, value, sortBy }));
  };

  changeSortBy = sortBy => {
    this.setState(
      {
        sortBy
      },
      () => this.loadData(this.props)
    );
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Searcher />
        <SearchInformation
          changeSortBy={this.changeSortBy}
          sortBy={this.state.sortBy}
          numberFilms={this.props.films.length}
        />
        <Films films={this.props.films} />
      </div>
    );
  }
}

const mapStateProps = state => ({
  isLoaded: state.searchPage.isLoading,
  films: state.searchPage.films
});

export default connect(mapStateProps)(SearchPage);
