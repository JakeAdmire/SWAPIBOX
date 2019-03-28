export const filmReducer = (state = {}, action) => {
  switch(action.type) {

    case('CHOOSE_FILM'):
      const randNum = Math.floor(Math.random() * Math.floor(7));
      const { films } = action;
      let film = {
        crawl: films[randNum].opening_crawl,
        title: films[randNum].title,
        date: films[randNum].release_date,
        episode: films[randNum].episode_id
      };
      return film;

    default:
      return state;
  }
}