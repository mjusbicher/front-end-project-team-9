const getFavourite = () => {
  return JSON.parse(localStorage.getItem('favourites'));
};

const addFavourite = (item) => {
  const favoritos = getFavourite() ?? [];
  const exists = favouriteExists(item)
  localStorage.setItem('favourites', JSON.stringify(!!exists ? favoritos : [...favoritos, item]));
};

const favouriteExists = (item) => {
  const favoritos = getFavourite() ?? [];
  const allIds = favoritos.map((element) => element.id)
  if(allIds.includes(item.id)){
    return true
  } else {
    return false
  }
}

const removeFavourite = (item) => {
  const favoritos = getFavourite() ?? [];
  const exists = favouriteExists(item)
  localStorage.setItem('favourites', JSON.stringify(!!exists ? favoritos.filter((movies) => movies.id !== item.id) : favoritos));
};

const cleanFavourite = () => {

};

export {getFavourite, addFavourite, removeFavourite, cleanFavourite, favouriteExists};