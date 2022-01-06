export interface MessageState {
  message: string
}

export const enum MessageActionType {
  SET_MESSAGE = 'message/set_message',
  CLEAR_MESSAGE = 'message/clear_message'
}

export interface SetMessageAction {
  type: MessageActionType.SET_MESSAGE,
  payload: string
}

export interface ClearMessageAction {
  type: MessageActionType.CLEAR_MESSAGE
}

export type MessageAction = 
  | SetMessageAction
  | ClearMessageAction