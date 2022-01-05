export interface ChannelsState {
  channels: string[]
}

export const enum ChannelsActionType {
  ADD_CHANNEL = 'channels/add_channel',
  REMOVE_CHANNEL = 'channels/remove_channel'
}

export interface AddChannelAction {
  type: ChannelsActionType.ADD_CHANNEL
  payload: string
}

export interface RemoveChannelAction {
  type: ChannelsActionType.REMOVE_CHANNEL
  payload: string
}

export type ChannelsAction = 
  | AddChannelAction
  | RemoveChannelAction