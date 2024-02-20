import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articleReducer from '../store/reducers/articleSlice'

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
