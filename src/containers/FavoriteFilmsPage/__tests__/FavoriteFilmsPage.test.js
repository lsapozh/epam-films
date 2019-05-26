jest.mock("api", () => {
  return {
    loadMovies: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Beetlejuice",
          year: "1988",
          runtime: "92",
          genres: ["Comedy", "Fantasy"],
          director: "Tim Burton",
          actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
          plot:
            'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
        },
        {
          id: 2,
          title: "The Cotton Club",
          year: "1984",
          runtime: "127",
          genres: ["Crime", "Drama", "Music"],
          director: "Francis Ford Coppola",
          actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
          plot:
            "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        }
      ])
  };
});

import React from "react";
import App from "containers/App";
import Film from "components/Film";
import FavoriteFilmsPage from "containers/FavoriteFilmsPage";
import createHistory from "history/createMemoryHistory";
import createStore from "createStore";
import { push } from "react-router-redux";
import api from "api";

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("FavoriteFilmPage", async () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("render the page", async () => {
    const history = createHistory();
    const store = createStore(history);
    store.dispatch(push("/favorite"));
    const wrapper = mount(<App store={store} history={history} />);
    await flushPromises();
    wrapper.update();
    expect(wrapper.find(FavoriteFilmsPage).length).toBe(1);
    expect(wrapper.find(Film).length).toBe(2);
  });
});
