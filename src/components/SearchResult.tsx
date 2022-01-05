import styled from "styled-components"
import {
  getFirestore,
  query,
  collection,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import SearchProfile from "./SearchProfile"
import { User } from "../types"
import { useSelector } from 'react-redux'
import { RootState } from '../store'

function successor(str: string) {
  const beginning = str.slice(0, -1)
  let last = str.charAt(str.length - 1)
  last = String.fromCharCode(last.charCodeAt(0) + 1)
  return beginning + last 
}

const SearchResult = () => {
  const searchQuery = useSelector((state: RootState) => {
    return state.search.searchQuery
  })
  const auth = getAuth()
  const [currentUser] = useAuthState(auth)
  const db = getFirestore()
  const users = collection(db, 'users')
  const $query = query(
    users,
    where('email', '>=', searchQuery),
    where('email', '<', successor(searchQuery)),
    orderBy('email'),
    limit(4)
  )
  const [result] = useCollectionDataOnce($query)

  if(!searchQuery || !result) return <></>
  
  if(result.length == 0) {
    return (
      <ResultContainer>
        <SearchInfo>Nothing found</SearchInfo>
      </ResultContainer>
    )
  }

  return (
    <ResultContainer>
      {result.map(( userData, i) => {
        const user = userData as unknown as User
        if(user.uid === currentUser?.uid) return ''
        return (
          <SearchProfile key={i} user={user} />
        )
      })}
    </ResultContainer>
  )
}

const SearchInfo = styled.h2`
  color: grey;
  font-size: 1em;
  padding: 0.5em;
  border-top: 1px solid var(--lightgrey);
  transition: 0.2s all 0s;
  
  &:hover {
    background-color: var(--lightgrey);
    color: black;
  }
`

const ResultContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  background-color: white;
  box-shadow: var(--lightgrey) 0px 2px 1px;
`

export default SearchResult