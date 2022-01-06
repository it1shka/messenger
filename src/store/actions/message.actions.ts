import { MessageAction, MessageActionType } from "../types/message.types";

export function setMessage(
  message: string
): MessageAction {
  return {
    type: MessageActionType.SET_MESSAGE,
    payload: message
  }
}

export function clearMessage(): MessageAction {
  return {
    type: MessageActionType.CLEAR_MESSAGE
  }
}