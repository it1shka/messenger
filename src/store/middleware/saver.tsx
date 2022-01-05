import {
  Middleware,
  MiddlewareAPI,
  Dispatch
} from 'redux'

const channelsSaver: Middleware = 
  ({getState}: MiddlewareAPI) => 
  (next: Dispatch) =>
  action => {
    try {
      next(action)
      if(!action.type.startsWith('channels/')) return
      const channels = getState().channels
      const data = JSON.stringify(channels)
      localStorage.setItem('channels', data)
    } catch {}
  }

export default channelsSaver