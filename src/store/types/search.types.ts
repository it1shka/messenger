export interface SearchState {
  input: string
  searchQuery: string
}

export const enum SearchActionType {
  CLEAR_SEARCH = 'search/clear_search',
  SET_INPUT = 'search/set_input',
  SET_SEARCH_QUERY = 'search/set_search_query'
}

export interface ClearSearchAction {
  type: SearchActionType.CLEAR_SEARCH
}

export interface SetInputAction {
  type: SearchActionType.SET_INPUT
  payload: string
}

export interface SetSearchQueryAction {
  type: SearchActionType.SET_SEARCH_QUERY
}

export type SearchAction = 
  | ClearSearchAction
  | SetInputAction
  | SetSearchQueryAction
