import styled from 'styled-components'
import { signOut, getAuth } from 'firebase/auth'
import * as Styled from './styles'

const SignOut = () => {
  const handleSignOut = () => {
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