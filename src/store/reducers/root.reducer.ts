import searchReducer from "./search.reducer"
import activeReducer from "./active.reducer"
import messageReducer from "./message.reducer"
import { combineReducers } from "redux"

const appReducer = combineReducers({
  search: searchReducer,
  active: activeReducer,
  message: messageReducer
})

type AppState = ReturnType<typeof appReducer>
type ReducerAction<T> = 
  T extends (state: any, action: infer U) => any
    ? U : never
type AppReducerAction = ReducerAction<typeof appReducer>

type ResetAction = {
  type: 'RESET'
}

const rootReducer = (
  state: AppState | undefined, 
  action: 
    | AppReducerAction 
    | ResetAction
) => {
  if(action.type === 'RESET') {
    return appReducer(
      undefined, 
      action as unknown as AppReducerAction
    )
  }
  return appReducer(state, action)
}

export function reset(): ResetAction {
  return { type: 'RESET' }
}

export default rootReducer