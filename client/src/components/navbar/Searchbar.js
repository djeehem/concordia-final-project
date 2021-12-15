import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';



const Searchbar = ({ suggestions, handleSelect, categories }) => {
  const [value, setValue] = useState('');
  const [suggestionList, setSuggestionList] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
    if (e.target.value.length >= 2) {
      setSuggestionList(suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(e.target.value.toLowerCase())))
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
          onKeyDown = {e => {
            if (e.key === 'Enter') {
              handleSelect(e.target.value);
            }
          }}
        />
        <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
      </StyledForm>
      {suggestionList.length > 0 && (
        <ListWrapper>
          <SuggestionList>
            {suggestionList.map(suggestion => {
              let firstHalf = suggestion.title.slice(0, value.length);
              let secondHalf = suggestion.title.slice(value.length);
              
              return (
                <SuggestionItem 
                  key={suggestion.id}
                  onClick= {() => handleSelect(suggestion.title)}
                >
                  <span>
                    {firstHalf}
                    <Prediction>
                      {secondHalf}
                    </Prediction>
                  </span>
                  <i style={{fontSize: "small"}}> in <span style={{color: "purple"}}>{categories[suggestion.categoryId].name}</span></i>
                </SuggestionItem>
              )
            })}
          </SuggestionList>
        </ListWrapper>
      )}
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

const ClearButton = styled(Button)`
  /* width: 20%;
  color: white;
  background-color: blue;
  border-radius: 3px;
  border: none;
  padding: 10px 25px;
  font-size: large;

  &:focus {
    outline: 2px solid #82abed;
  } */
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