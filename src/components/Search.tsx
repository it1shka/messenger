import styled from 'styled-components'
import SearchResult from './SearchResult'
import type { ChangeEvent } from 'react'
import * as Styled from './styles'
import {
  useDispatch, useSelector
} from 'react-redux'
import type {
  RootState, AppDispatch
} from '../store'
import * as Action from '../store/actions/search.actions'

const Search = () => {
  const dispatch = useDispatch<AppDispatch>()
  const input = useSelector((state: RootState) => state.search.input)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    dispatch(Action.setInput(value))
  }

  const handleSearch = () => {
    dispatch(Action.setSearchQuery())
  }

  return (
    <SearchContainer onSubmit={event => {
      event.preventDefault()
      handleSearch()
    }}>
      <SearchInput 
        value={input}
        onChange={handleInputChange}
        placeholder='Search by email...'/>
      <Styled.Button 
        onClick={handleSearch} 
        style={{fontSize: '0.75em'}}>
        Search
      </Styled.Button>
      <SearchResult />
    </SearchContainer>
  )
}

const SearchContainer = styled.form`
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