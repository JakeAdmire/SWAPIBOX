export const addFavorite = (film) => ({
  type: 'ADD_FAVORITE',
  film
})

export const removeFavorite = (film) => ({
  type: 'REMOVE_FAVORITE',
  film
})

export const setCategory = (event) => ({
  type: 'SET_CATEGORY',
  event
})