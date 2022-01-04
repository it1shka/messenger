import styled from 'styled-components'
import { signOut, getAuth } from 'firebase/auth'

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

const SignOutButton = styled.button`
  margin-top: auto;
  padding: 0.5em 0;
  font-size: 1em;
  border: none;
  background-color: #b52d00;
  color: white;

  &:hover {
    background-color: #781e00;
  }
`

export default SignOut