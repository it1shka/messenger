import { MessageAction, MessageActionType, MessageState } from "../types/message.types";

const messageDefaultState: MessageState = {
  message: ''
}

const messageReducer = (
  state = messageDefaultState,
  action: MessageAction
): MessageState => {
  switch(action.type) {
    case MessageActionType.SET_MESSAGE:
      return {...state, message: action.payload}
    case MessageActionType.CLEAR_MESSAGE:
      return {...state, message: ''}
    default:
      return state
  }
}

export default messageReducer