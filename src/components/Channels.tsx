import { getAuth } from 'firebase/auth'
import { doc, getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import Channel from './Channel'

const Channels = () => {
  const auth = getAuth()
  const db = getFirestore()
  const [user] = useAuthState(auth)
  const channelsRef = doc(db, 'engaged', user!.uid)
  const [channelsData] = useDocumentData(channelsRef)
  let channels: string[] = []
  if(channelsData) {
    channels = channelsData.channels
  }

  console.log(channels)
  return (
    <div>
      {channels.map((channel, i) => {
        return <Channel key={i} uid={channel} />
      })}
    </div>
  )
}


export default Channels