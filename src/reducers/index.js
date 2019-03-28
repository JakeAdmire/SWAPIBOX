import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = combineReducers ({
  film: filmReducer,
  faves: favoritesReducer
})