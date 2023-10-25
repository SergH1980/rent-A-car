import styled from 'styled-components';

import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

export const ModalWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 541px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 1000;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  cursor: pointer;

  position: absolute;
  top: 16px;
  right: 16px;
  color: rgba(18, 20, 23, 1);

  transition: all 1250ms;
  :hover,
  :focus {
    color: #0b44cd;
  }
`;

export const VscChromeClose = styled(CloseIcon)`
  transition: all 250ms;
  :hover,
  :focus {
    color: #0b44cd;
  }
`;

export const ImageHolder = styled.div`
  width: 461px;
  height: 248px;
  overflow: hidden;
  border-radius: 14px;
  /* margin-top: -21px; */
  margin-bottom: 14px;
  background-color: gray;
`;

export const CarImg = styled.img`
  width: 461px;
  height: 248px;
  object-fit: fit;
`;

export const CarHeader = styled.h3`
  color: rgba(18, 20, 23, 1);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const CarModel = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const SecondaryInfoWrap = styled.div`
  display: flex;
  width: 277px;
  height: 40px;
  flex-direction: column;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const OptionsWrap = styled.div`
  margin-bottom: 24px;
`;

export const OptionsList = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: column;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  overflow: auto;
`;

export const OptionsHead = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-top: 0px;
  margin-bottom: 8px;
`;

export const ConditionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionsHead = styled.h3`
  margin: 0;
  color: rgba(18, 20, 23, 1);
  font-weight: 500px;
  font-size: 14px;
  line-height: 1.43;
`;

export const ConditionListWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const ConditionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConditionItem = styled.span`
  display: inline-block;
  background-color: rgba(249, 249, 249, 1);
  padding: 7px 14px;
  border-radius: 35px;
`;

export const ConditionLine = styled.div`
  display: flex;
  gap: 8px;
`;

export const ConditionValue = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const RentalButton = styled.button`
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  transition: all 250ms;
  cursor: pointer;
  color: white;

  font-size: 14px;
  line-height: 1.43;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
