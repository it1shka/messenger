import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  z-index: 99;
  background-color: white;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding: 0.5em 2em;
  box-shadow: var(--lightgrey) 0px 2px 3px;
  font-style: italic;
`

const AppBar = () => {
  return (
    <Header>
      <h1>Messenger</h1>
    </Header>  
  )
}

export default AppBar