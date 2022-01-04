import styled from 'styled-components'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'
import DialogView from './components/DialogView'
import SignIn from './components/SignIn'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
`

const App = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  console.log(user)
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

export default App