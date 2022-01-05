import styled from 'styled-components'
import SearchResult from './SearchResult'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import * as Styled from './styles'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [input, setInput] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInput(value)
  }

  const handleSearchClick = () => {
    setSearchQuery(input)
  }

  return (
    <SearchContainer>
      <SearchInput 
        value={input}
        onChange={handleInputChange}
        placeholder='Search by email...'/>
      <Styled.Button 
        onClick={handleSearchClick} 
        style={{fontSize: '0.75em'}}>
        Search
      </Styled.Button>
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
  display: flex;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 25px;
  box-shadow: var(--lightgrey) 0px 0px 3px;
  flex: 1;
`

export default Search