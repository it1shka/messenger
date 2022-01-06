import styled from 'styled-components'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'
import DialogView from './components/DialogView'
import SignIn from './components/SignIn'
import DialogBar from './components/DialogBar'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const App = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  
  const activeUid = useSelector((state: RootState) => {
    return state.active.active
  })
  
  return user 
  ? (
    <Container>
      <AppBar full={activeUid === null}/>
      {activeUid && <DialogBar />}
      <Sidebar />
      <DialogView />
    </Container>
  ) 
  : (
    <SignIn />
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
`

export default App