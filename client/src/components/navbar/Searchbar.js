import React, { useContext } from 'react';
import styled from 'styled-components';

import { NoteContext } from '../NoteContext';
import Button from '../Button';

const Searchbar = () => {
  const {
    searchValue, 
    setSearchValue,
    setSuggestionList,
    suggestions,
  } = useContext(NoteContext);

  const handleChange = e => {
    setSearchValue(e.target.value);
    console.log(searchValue)
    if (e.target.value.length > 1) {
      setSuggestionList(suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(e.target.value.toLowerCase()) || suggestion.note.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setSuggestionList([]);
    }
  }

  const handleClick = (ev) => {
    // ev.preventDefault();
    setSearchValue('')
  }

  return (
    <Wrapper>
        <StyledInput
          type='text'
          onChange = {e => handleChange(e)}
          // onKeyDown = {e => {
          //   if (e.key === 'Enter') {
          //     handleSelect(e.target.value);
          //   }
          // }}
        />
        <Button onClick={ handleClick }>Clear</Button>
    </Wrapper>  
  )
};

const Wrapper = styled.div`
  display: flex;
  margin-right: auto;
  width: 50%;
`;

const StyledInput = styled.input`
  width: 80%;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: large;
  padding-left: 10px;

  &:focus {
    outline: 2px solid #82abed;
  }
`;

export default Searchbar;
