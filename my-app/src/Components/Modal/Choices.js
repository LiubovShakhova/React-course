import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
  column-count: 2;
  max-width: 450px;
  column-gap: 15px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>На выбор: </h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => ( 
          <ChoiceLabel key={i}>
            <ChoiceRadio 
              type="radio"
              name="choices"
              checked={choice === item}
              onChange={changeChoices}
              value={item}
              />
              {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  )
}