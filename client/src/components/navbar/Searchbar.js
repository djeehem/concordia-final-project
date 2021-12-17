import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { NoteContext } from '../NoteContext';
import Button from '../Button';

const Searchbar = () => {
  const {
    value,
    setValue,
    suggestionList,
    setSuggestionList,
    suggestions,
    notes
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
        <Button onClick={() => setValue('')}>Clear</Button>
      </StyledForm>
    </Wrapper>  
  )
};

export default Searchbar;

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

const Prediction = styled.span`
  font-weight: bold;
`;

const ListWrapper = styled.div`
  margin-top: 10px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const SuggestionList = styled.ul`
  margin: 10px;
`;

const SuggestionItem = styled.li`
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(245, 236, 137, 0.3);
  }
`;