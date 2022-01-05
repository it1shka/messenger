import { ClearSearchAction, SearchActionType, SetInputAction, SetSearchQueryAction } from "../types/search.types";

export function clearSearch(): ClearSearchAction {
  return {
    type: SearchActionType.CLEAR_SEARCH,
  }
}

export function setInput(input: string): SetInputAction {
  return {
    type: SearchActionType.SET_INPUT,
    payload: input,
  }
}

export function setSearchQuery(): SetSearchQueryAction {
  return {
    type: SearchActionType.SET_SEARCH_QUERY,
  }
}