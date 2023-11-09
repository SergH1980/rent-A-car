import styled from 'styled-components';

export const ReturnButton = styled.button`
  width: 170px;
  margin: 0 auto;
  height: 44px;
  border-radius: 12px;
  background-color: #34a234;
  border: none;
  transition: all 250ms;
  cursor: pointer;
  color: white;

  &:hover,
  &:focus {
    background-color: #1d711d;
  }
`;

export const EmptyList = styled.h2`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  color: #3470ff;
`;
