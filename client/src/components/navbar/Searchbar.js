import React, { useContext } from 'react';
import styled from 'styled-components';

import { NoteContext } from '../NoteContext';
import Button from '../Button';

const Searchbar = () => {
  const {
    notes,
    searchValue, 
    setSearchValue,
    setSuggestionList,
  } = useContext(NoteContext);

  const handleChange = e => {
    setSearchValue(e.target.value);
    
    if (e.target.value.length > 1) {
      setSuggestionList(notes.filter(suggestion =>
        suggestion.title.toLowerCase().includes(e.target.value.toLowerCase()) || suggestion.note.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setSuggestionList([]);
    }
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    setSearchValue('');
  }

  console.log(searchValue)

  return (
      <Wrapper onSubmit={ handleClick }>
        <StyledInput
          type='text'
          value={searchValue}
          onChange = {ev => handleChange(ev)}
        />
        <Button type="submit" value="Clear">Clear</Button>
    </Wrapper>  
  )
};

const Wrapper = styled.form`
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
