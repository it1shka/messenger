import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Channel from './Channel'

const Channels = () => {
  const channels = useSelector((state: RootState) => {
    return state.channels.channels
  })

  return (
    <div>
      {channels.map((channel, i) => {
        return <Channel key={i} uid={channel} />
      })}
    </div>
  )
}


export default Channels