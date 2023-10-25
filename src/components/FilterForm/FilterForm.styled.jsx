import styled from 'styled-components';

export const StyledFormBox = styled.div`
  display: flex;
  align-items: end;
  gap: 18px;

  width: 859px;
  height: 74px;
  margin: 0 auto;
  border: 1px solid gray;

  margin-bottom: 50px;
`;

export const FilterWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 224px;
`;

export const FilterLabel = styled.label`
  color: #8a8a89;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
`;
export const FilterInput = styled.select`
  border: none;
  height: 48px;
  padding: 14px 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;

  :focus {
    border: none;
  }
`;

export const FilterList = styled.option`
  color: gray;
`;

export const MileageWrap = styled.div`
  display: flex;
`;

export const FromInput = styled.input`
  width: 160px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
  border-right: 1px solid #8a8a8933;
`;
export const ToInput = styled.input`
  width: 160px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
`;

export const SubmitButton = styled.button`
  width: 136px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  color: white;

  transition: all 250ms;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
