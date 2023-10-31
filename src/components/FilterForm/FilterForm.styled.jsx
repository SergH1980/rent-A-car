import styled from 'styled-components';

export const StyledFormBox = styled.form`
  display: flex;
  align-items: end;
  gap: 18px;

  width: 859px;
  height: 74px;
  margin: 0 auto;

  margin-bottom: 50px;
`;

export const BrandWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 224px;
`;
export const PriceWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 125px;
`;

export const MileageWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 320px;
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
  outline: none;
`;

export const FilterList = styled.option`
  color: gray;
`;

export const MileageInputWrap = styled.div`
  display: flex;
`;

export const FromInput = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid #8a8a8933;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  padding: 0 0 0 14px;
  outline: none;
  &::placeholder {
    color: #121417;
  }
`;
export const ToInput = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  padding: 0 0 0 14px;
  outline: none;
  &::placeholder {
    color: #121417;
  }
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
