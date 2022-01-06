import { 
  createStore, 
  combineReducers,
} from 'redux'
import searchReducer from './reducers/search.reducer'
import activeReducer from './reducers/active.reducer'

const rootReducer = combineReducers({
  search: searchReducer,
  active: activeReducer
})

const store = createStore(rootReducer)
export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>