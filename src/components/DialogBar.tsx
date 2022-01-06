import { doc, getFirestore } from 'firebase/firestore'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../store'
import { User } from '../types'

const DialogBar = () => {
  const db = getFirestore()
  const activeUid = useSelector((state: RootState) => {
    return state.active.active
  })
  const selectedUser = doc(db, 'users', activeUid!)
  const data = useDocumentDataOnce(selectedUser)
  const userData = data[0] as unknown as (undefined | User)

  return (
    <DialogBarContainer>
      {userData && (
      <>
        <ProfilePicture src={userData.photoURL}/>
        <div>
          <h3>{userData.displayName}</h3>
          <small>{userData.email}</small>
        </div>
      </>
      )}
    </DialogBarContainer>
  )
}

const DialogBarContainer = styled.div`
  position: relative;
  z-index: 98;

  background-color: white;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 0.5em 1.5em;
  box-shadow: var(--lightgrey) 0px 2px 3px;
  color: grey;

  display: flex;
  align-items: center;
  justify-content: flex-start;

`

const ProfilePicture = styled.img`
  height: 50px;
  border-radius: 100%;
  margin-right: 1.5em;
`

export default DialogBar