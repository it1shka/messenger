import { ChannelsAction, ChannelsActionType, ChannelsState } from "../types/channels.types";

function loadChannels(): ChannelsState {
  try {
    const data = localStorage.getItem('channels')
    if(data === null) return {channels: []}
    return JSON.parse(data) as ChannelsState
  } catch {
    return {channels: []}
  }
}

function removeChannel(channels: string[], channel: string) {
  return channels.filter(element => element !== channel)
}

function addChannel(channels: string[], channel: string) {
  const channelsSet = new Set(channels)
  channelsSet.add(channel)
  return Array.from(channelsSet)
}

const defaultChannelsState = loadChannels()

const channelsReducer = (
  state = defaultChannelsState,
  action: ChannelsAction
): ChannelsState => {
  switch(action.type) {
    case ChannelsActionType.ADD_CHANNEL:
      return ({
        ...state, 
        channels: addChannel(
          state.channels, 
          action.payload
        )
      })
    case ChannelsActionType.REMOVE_CHANNEL:
      return ({
        ...state,
        channels: removeChannel(
          state.channels,
          action.payload
        )
      })
    default:
      return state
  }
}

export default channelsReducer