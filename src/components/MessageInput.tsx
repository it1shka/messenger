import { FormEvent } from 'react'
import styled from 'styled-components'
import * as Styled from './styles'

const MessageInput = () => {

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <InputContainer onSubmit={handleSendMessage}>
      <Styled.Input placeholder='Your message...'/>
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