import styled from "styled-components"
import { getFirestore, doc, setDoc, arrayRemove } from 'firebase/firestore'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import type { User } from "../types"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"


const Channel = ({uid}: {uid: string}) => {
  const auth = getAuth()
  const [currentUser] = useAuthState(auth)

  const db = getFirestore()
  const user = doc(db, 'users', uid)
  const data = useDocumentDataOnce(user)
  const userData = data[0] as unknown as User

  const channelsRef = doc(db, 'engaged', currentUser!.uid)

  const handleRemoveChannel = () => {
    setDoc(channelsRef, {
      channels: arrayRemove(uid)
    })
  }

  return (
    <ChannelContainer>
      <ProfilePicture src={userData?.photoURL}/>
      <Name>{userData?.displayName}</Name>
      <CloseButton onClick={handleRemoveChannel}>
        Remove
      </CloseButton>
    </ChannelContainer>
  )
}

const ChannelContainer = styled.div`
  position:relative;
  display: flex;
  padding: 0.5em 0.75em;
  align-items: center;
  background-color: #f7f7f7;
  border-bottom: 1px solid var(--lightgrey);
  color: grey;
  transition: 0.2s all 0s;

  &:hover {
    background-color: var(--lightgrey);
    color: black;
    & > button {
      display: block;
    }
  }
`

const ProfilePicture = styled.img`
  height: 35px;
  border-radius: 100%;
`

const Name = styled.h2`
  margin-left: 0.5em;
  font-size: 1em;
  font-style: italic;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 3px 5px;
  color: grey;
  cursor: pointer;
  display: none;
  font-size: 0.65em;
  &:hover {
    text-decoration: underline;
  }
`

export default Channel