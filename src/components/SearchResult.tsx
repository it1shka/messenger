import styled from "styled-components"
import type { FC } from 'react'
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

function successor(str: string) {
  const beginning = str.slice(0, -1)
  let last = str.charAt(str.length - 1)
  last = String.fromCharCode(last.charCodeAt(0) + 1)
  return beginning + last 
}

const SearchResult: FC<{searchQuery: string}> = ({
  searchQuery,
}) => {
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

const ResultContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  background-color: white;
  box-shadow: var(--lightgrey) 0px 2px 1px;
`

export default SearchResult