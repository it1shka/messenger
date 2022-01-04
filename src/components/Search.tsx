import styled from 'styled-components'
import SearchResult from './SearchResult'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchQuery(value)
  }

  return (
    <SearchContainer>
      <SearchInput 
        onChange={handleInputChange}
        placeholder='Search by email...'/>
      <SearchResult 
        searchQuery={searchQuery}
      />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  position: relative;
  padding: 0.5em 0.75em 1em 0.75em;
  box-shadow: var(--lightgrey) 0px 2px 1px;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 25px;
  box-shadow: var(--lightgrey) 0px 0px 3px;
  width: 100%;
`

export default Search