import { createStore, combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer'

const rootReducer = combineReducers({
  search: searchReducer
})

const store = createStore(rootReducer)
export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>