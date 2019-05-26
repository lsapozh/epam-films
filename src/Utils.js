export const saveToLocalStorage = items => {
  localStorage.setItem("favoriteList", JSON.stringify(items));
};

export const loadFavoriteFromStorage = () => {
  const favoriteListText = localStorage.getItem("favoriteList");
  return favoriteListText ? JSON.parse(favoriteListText) : [];
};

export const escapeRegex = string =>
  string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

export const makeSearchRegex = string => {
  const list = string
    .split(", ")
    .map(escapeRegex)
    .join("|");
  return `(${list})`;
};

export const makeFavoriteListRegExp = favoriteList => {
  const firstId = `^${favoriteList[0]}$`;
  const filmsList = favoriteList.reduce((acc, id) => {
    return acc + `|^${id}$`;
  }, firstId);
  return `(${filmsList})`;
};
