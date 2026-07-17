import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import searchReducer from './searchSlice'
import favoritesReducer from './favoritesSlice'
import playerReducer from './playerSlice'

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
  player: playerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
