import { getAuth } from 'firebase/auth'
import { doc, getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../store'
import { Message } from '../types'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

function getChannelId(p1: string, p2: string) {
  return [p1, p2].sort().join('')
}

const DialogView = () => {

  const activeUid = useSelector((state: RootState) => {
    return state.active.active
  })

  const auth = getAuth()
  const [user] = useAuthState(auth)

  const myUid = user!.uid
  const friendUid = useSelector((state: RootState) => {
    return state.active.active
  })!
  const chanId = getChannelId(myUid, friendUid)

  const db = getFirestore()
  const messagesRef = doc(db, 'channels', chanId)
  const [messagesDoc] = useDocumentData(messagesRef)
  const messages: Message[] = messagesDoc?.messages ?? []

  return (
    <DialogContainer>
    {activeUid && (
      <>
      <InnerContainer>
        <MessageList messages={messages}/>
        <MessageInput />
      </InnerContainer>
      </>
    )}
    </DialogContainer>
  )
}

const DialogContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #ffffff;
  background-image: linear-gradient( rgba(0, 0, 0, 0.065), rgba(0, 0, 0, 0.065) ), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: calc(100% - 0.5em);
  border-radius: 10px;

  background-color: white;
  box-shadow: var(--lightgrey) 0px 0px 6px;
  
  display: flex;
  flex-direction: column;
`

export default DialogView