import { ActiveAction, ActiveActionType, ActiveState } from "../types/active.types";

const activeDefaultState: ActiveState = {
  active: null
}

const activeReducer = (
  state = activeDefaultState,
  action: ActiveAction
): ActiveState => {
  switch(action.type) {
    case ActiveActionType.SET_ACTIVE:
      return {...state, active: action.payload}
    default:
      return state
  }
}

export default activeReducer