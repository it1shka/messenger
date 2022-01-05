import { AddChannelAction, ChannelsActionType, RemoveChannelAction } from "../types/channels.types";

export function addChannel(
  channel: string
): AddChannelAction {
  return {
    type: ChannelsActionType.ADD_CHANNEL,
    payload: channel
  }
}

export function removeChannel(
  channel: string
): RemoveChannelAction {
  return {
    type: ChannelsActionType.REMOVE_CHANNEL,
    payload: channel
  }
}