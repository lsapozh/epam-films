export const loadMovies = ({ findBy, value, sortBy = "year" }) => {
  return fetch(
    `/api/movies?${findBy}_like=${value}&_sort=${sortBy}&_order=asc`
  ).then(response => response.json());
};

export const loadMovie = ({ id }) => {
  return fetch(`/api/movies?id=${id}`)
    .then(response => response.json())
    .then(movies => movies[0]);
};
