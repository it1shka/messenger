import styled from 'styled-components'
import { signOut, getAuth } from 'firebase/auth'
import * as Styled from './styles'
import { useDispatch } from 'react-redux'
import { RootDispatch } from '../store'
import { reset } from '../store/reducers/root.reducer'

const SignOut = () => {
  const dispatch = useDispatch<RootDispatch>()

  const handleSignOut = () => {
    dispatch(reset())
    const auth = getAuth()
    signOut(auth)
  }

  return (
    <SignOutButton onClick={handleSignOut}>
      Sign out!
    </SignOutButton>
  )
}

const SignOutButton = styled(Styled.Button)`
  margin-top: auto;
  border-radius: 0;
  &:hover {
    border-radius: 0;
  }
`

export default SignOut