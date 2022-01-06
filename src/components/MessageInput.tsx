import { getAuth } from 'firebase/auth'
import { collection, getFirestore, query, where } from 'firebase/firestore'
import { ChangeEvent, FormEvent } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootDispatch, RootState } from '../store'
import { clearMessage, setMessage } from '../store/actions/message.actions'
import * as Styled from './styles'

const MessageInput = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  const myUid = user!.uid
  const friendUid = useSelector((state: RootState) => {
    return state.active.active
  })!

  const db = getFirestore()
  const channels = collection(db, 'channels')
  // complete here...

  const dispatch = useDispatch<RootDispatch>()
  const message = useSelector((state: RootState) => {
    return state.message.message
  })

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault()
    // send message code here below

    dispatch(clearMessage())
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setMessage(value))
  }

  return (
    <InputContainer onSubmit={handleSendMessage}>
      <Styled.Input
        value={message}
        onChange={handleInputChange} 
        placeholder='Your message...'/>
      <Styled.Button type='submit'>
        Send
      </Styled.Button>
    </InputContainer>
  )
}

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75em 1em;
  box-shadow: var(--lightgrey) 0px -1px 3px;
`

export default MessageInput