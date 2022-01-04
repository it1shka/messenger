import styled from 'styled-components'
import SearchResult from './SearchResult'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

const Search = () => {
  type Timer = ReturnType<typeof setTimeout>
  const notimer = 0 as any as Timer

  const [input, setInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [updateTimeout, setUpdateTimeout] = useState<Timer>(notimer)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if(updateTimeout) {
      clearTimeout(updateTimeout)
    }

    setInput(value)
    setUpdateTimeout(setTimeout(() => {
      setSearchQuery(input)
    }, 750))
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