export const searchPath = ({ findBy, value }) =>
  `/search?findBy=${encodeURIComponent(findBy)}&value=${encodeURIComponent(
    value
  )}`;

export const filmPath = ({ id }) => `/film?id=${encodeURIComponent(id)}`;
