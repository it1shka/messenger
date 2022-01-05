import { 
  createStore, 
  combineReducers,
  applyMiddleware
} from 'redux'
import searchReducer from './reducers/search.reducer'
import channelsReducer from './reducers/channels.reducer'
import channelsSaver from './middleware/saver'

const rootReducer = combineReducers({
  search: searchReducer,
  channels: channelsReducer
})

const store = createStore(rootReducer, applyMiddleware(channelsSaver))
export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>