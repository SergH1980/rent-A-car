import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  margin: 0 auto;
  width: 150px;
  height: 44px;
  border-radius: 12px;
  background-color: #34a234;
  border: none;
  transition: all 250ms;
  cursor: pointer;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #1d711d;
  }
`;
