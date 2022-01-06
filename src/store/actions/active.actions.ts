import { ActiveAction, ActiveActionType } from "../types/active.types";

export function setActive(active: string | null): ActiveAction {
  return {
    type: ActiveActionType.SET_ACTIVE,
    payload: active
  }
}