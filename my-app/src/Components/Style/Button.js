import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-family: inherit;
  background-color: #299B01;
  color: #fff;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
  &:disabled {
    background-color: #aaa;
    color: #fff;
    border-color: #aaa;
  }
`;