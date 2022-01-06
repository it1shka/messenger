import styled from 'styled-components'

const AppBar = ({full}: {full: boolean}) => {
  return (
    <Header full={full}>
      <h1>Messenger</h1>
    </Header>  
  )
}

const Header = styled.header<{full?: boolean}>`
  position: relative;
  z-index: 99;
  background-color: white;
  grid-row: 1 / 2;
  grid-column: 1 / ${({full}) => full ? '3' : '2'};
  padding: 0.5em 2em;
  box-shadow: var(--lightgrey) 0px 2px 3px;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
`

export default AppBar