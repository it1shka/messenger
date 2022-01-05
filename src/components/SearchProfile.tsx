import type { FC } from 'react'
import styled from 'styled-components'
import { User } from '../types'

const SearchProfile: FC<{user: User}> = ({
  user
}) => {
  
  return (
    <UserContainer>
      <div>
        <h4>{user.displayName}</h4>
        <small>{user.email}</small>
      </div>
      <ProfilePicture src={user.photoURL}/>
    </UserContainer>
  )
}

const UserContainer = styled.li`
  border-top: 1px solid var(--lightgrey);
  padding: 0.2em 0.5em;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: grey;
  transition: 0.2s all 0s;

  &:hover {
    background-color: var(--lightgrey);
    color: black;
    cursor: pointer;
  }
`

const ProfilePicture = styled.img`
  height: 25px;
  border-radius: 100%;
  margin-left: auto;
`

export default SearchProfile