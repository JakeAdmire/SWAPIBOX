export const favoritesReducer = (state = [], action) => {
  switch(action.type) {

    case('ADD_FAVORITE'):
      state.push(action.film);
      return state;

    case('REMOVE_FAVORITE'):
      const index = state.indexOf(action.film);
      state.splice(index, 1);
      return state;

    default:
      return state;
  }
}