import styled from 'styled-components'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'
import DialogView from './components/DialogView'
import SignIn from './components/SignIn'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const App = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  
  return user 
  ? (
    <Container>
      <AppBar />
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