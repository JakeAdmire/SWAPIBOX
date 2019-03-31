import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers ({
  faves: favoritesReducer,
  category: categoryReducer
})