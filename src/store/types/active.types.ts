export interface ActiveState {
  active: null | string
}

export const enum ActiveActionType {
  SET_ACTIVE = 'active/set_active'
}

export interface SetActiveAction {
  type: ActiveActionType.SET_ACTIVE
  payload: string | null
}

export type ActiveAction = 
  | SetActiveAction