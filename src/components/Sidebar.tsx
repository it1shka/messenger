import styled from 'styled-components'
import SignOut from './SignOut'
import Search from './Search'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Search />
      <SignOut />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  box-shadow: var(--lightgrey) 2px 0px 3px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default Sidebar