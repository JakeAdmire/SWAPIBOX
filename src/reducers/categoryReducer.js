export const categoryReducer = (state = '', action) => {
  switch(action.type) {

    case('SET_CATEGORY'):
      return action.event;

    default:
      return state;
  }
}