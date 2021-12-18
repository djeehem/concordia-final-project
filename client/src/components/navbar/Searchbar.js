import React, { useContext } from 'react';
import styled from 'styled-components';

import { NoteContext } from '../NoteContext';
import Button from '../Button';

const Searchbar = () => {
  const {
    value,
    setValue,
    setSuggestionList,
    suggestions,
  } = useContext(NoteContext);

  const handleChange = e => {
    setValue(e.target.value);
    console.log(value)
    if (e.target.value.length >= 2) {
      setSuggestionList(suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(e.target.value.toLowerCase()) || suggestion.note.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setSuggestionList([]);
    }
  }

  const handleClick = (ev) => {
    // ev.preventDefault();
    setValue('')
  }

  return (
    <Wrapper>
      <StyledForm>
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
      </StyledForm>
    </Wrapper>  
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledForm = styled.form`
  display: flex;
  width:100%;
  gap: 10px;
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
