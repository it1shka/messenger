import { 
  SearchState,
  SearchAction,
  SearchActionType
} from "../types/search.types"

const searchDefaultState: SearchState = {
  input: '',
  searchQuery: ''
}

const searchReducer = (
  state = searchDefaultState,
  action: SearchAction
): SearchState => {
  switch(action.type) {
    case SearchActionType.CLEAR_SEARCH:
      return {...searchDefaultState}
    case SearchActionType.SET_INPUT:
      return {...state, input: action.payload}
    case SearchActionType.SET_SEARCH_QUERY:
      return {...state, searchQuery: state.input}
    default:
      return state
  }
}

export default searchReducer