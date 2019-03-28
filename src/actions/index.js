export const chooseFilm = (films) => ({
  type: 'CHOOSE_FILM',
  films
})

export const addFavorite = (film) => ({
  type: 'ADD_FAVORITE',
  film
})