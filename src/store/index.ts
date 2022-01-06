import { 
  createStore, 
} from 'redux'

import rootReducer from './reducers/root.reducer'

const store = createStore(rootReducer)
export default store

export type RootDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>