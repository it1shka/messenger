import styled from 'styled-components'
import GoogleLogo from '../images/google-logo.svg'
import * as Styled from './styles'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

const SignInContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--lightgrey) 0px 0px 5px;
  border-radius: 25px;
  overflow: hidden;
`

const Title = styled.h1`
  background-color: var(--primary);
  color: white;
  padding: 0.25em 0.5em;
`

const Logo = styled.img`
  width: 350px;
  height: 110px;
`

const SignInButton = styled(Styled.Button)`
  display: block;
  margin: 0 auto 1.5em auto;
  font-size: 1.5em;
`

const SignIn = () => {
  const handleSignIn = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <SignInContainer>
      <Title>Sign in with: </Title>
      <Logo src={GoogleLogo}/>
      <SignInButton onClick={handleSignIn}>
        Sign in!
      </SignInButton>
    </SignInContainer>
  )
}

export default SignIn