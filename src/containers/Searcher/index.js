import React, { Component } from "react";
import {
  Input,
  SearchButton,
  SearchBy,
  SearchForm,
  Button,
  Form,
  Background
} from "./components";
import Header from "components/Header";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { Label } from "components/UI";
import { searchPath } from "Paths";

export class Searcher extends Component {
  state = {
    findBy: "title",
    value: ""
  };

  submitForm = e => {
    e.preventDefault();
    this.navigate({
      findBy: this.state.findBy,
      value: this.state.value
    });
  };

  onInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  makeSelectFindBy = findBy => e => {
    e.preventDefault();
    this.setState({
      findBy
    });
  };

  toFavoriteFilms = () => {
    this.props.dispatch(push(`/favorite`));
  };

  navigate = ({ findBy, value }) => {
    this.props.dispatch(push(searchPath({ findBy, value })));
  };

  render() {
    return (
      <div>
        <Background />
        <SearchForm>
          <Header onClick={this.toFavoriteFilms} buttonName="Favorite Films" />

          <Label>Find your movie</Label>
          <Form onSubmit={this.submitForm}>
            <Input onChange={this.onInputChange} />
            <SearchButton onClick={this.submitForm}>Search</SearchButton>
          </Form>

          <SearchBy>
            <div>Search By</div>
            <Button
              onClick={this.makeSelectFindBy("title")}
              active={this.state.findBy === "title"}
            >
              Title
            </Button>
            <Button
              onClick={this.makeSelectFindBy("director")}
              active={this.state.findBy === "director"}
            >
              Director
            </Button>
          </SearchBy>
        </SearchForm>
      </div>
    );
  }
}

export default connect()(Searcher);
