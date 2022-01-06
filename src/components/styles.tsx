import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 5px;
  background-color: var(--primary);
  color: white;
  font-size: 1em;
  box-shadow: grey 0px 0px 3px;
  transition: 0.25s all 0s;
  &:hover {
    background-color: var(--dark);
    border-radius: 7px;
  }
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 25px;
  box-shadow: var(--lightgrey) 0px 0px 3px;
  flex: 1;
`