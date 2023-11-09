import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  background-color: transparent;
  color: #3470ff;
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

export const SpinnerWrap = styled.div`
  position: absolute;
  top: 35%;
  left: 45%;
`;

export const NoResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const NoResultHeader = styled.h2`
  font-family: 'ManropeSemiBold';
  font-size: 32px;
  color: #3470ff;
`;

export const NoResultText = styled.div`
  font-size: 22px;
  font-family: 'ManropeMedium';
`;
