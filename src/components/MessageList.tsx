import { getAuth } from 'firebase/auth'
import { useEffect, useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled, { css } from 'styled-components'
import { Message } from '../types'

const MessageList = ({messages}: {messages: Message[]}) => {
  const endMock = useRef<HTMLDivElement>(null)
  useEffect(() => {
    endMock.current?.scrollIntoView({
       behavior: 'smooth' 
    })
  })

  const auth = getAuth()
  const [currentUser] = useAuthState(auth) 

  return (
    <MessageListContainer>
      {messages.map((message, i) => {
        return (
          <MessageElement 
            key={i}
            content={message.content}
            isMine={currentUser?.uid === message.author}
          />
        )
      })}
      <Mock ref={endMock}/>
    </MessageListContainer>
  )
}

const MessageElement = ({
  content, isMine
}: {content: string, isMine: boolean}) => {
  return (
    <MessageContainer isMine={isMine}>
      <p>{content}</p>
    </MessageContainer>
  )
}

const Mock = styled.div`
  float: left;
  clear: both;
`

const MessageListContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;

  padding: 0.5em 1em 2em 1em;
  & > * + * {
    margin-top: 0.2em;
  }

  scrollbar-width: none;
`

const MessageContainer = styled.div<{isMine?: boolean}>`
  background-color: var(--lightgrey);
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  max-width: 250px;
  word-wrap: break-word;

  ${({isMine}) => isMine && css`
  align-self: flex-end;
  background-color: #5771f2;
  color: white;
  `}
`

export default MessageList