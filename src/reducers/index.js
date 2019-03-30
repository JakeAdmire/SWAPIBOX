import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { favoritesReducer } from "./favoritesReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers ({
  film: filmReducer,
  faves: favoritesReducer,
  category: categoryReducer
})