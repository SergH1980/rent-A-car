import styled from 'styled-components';
import { ReactComponent as FavIconNormal } from '../../../images/normal.svg';
import { ReactComponent as FavIconSelected } from '../../../images/active.svg';

export const CardListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;

  width: 1184px;

  margin-bottom: 100px;
`;

export const CarCard = styled.div`
  background-color: transparent;
  border-radius: 14px;

  width: 274px;
  height: 426px;

  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const ImageHolder = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-top: -21px;
  margin-bottom: 14px;
`;

export const CarImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  object-position: center;
`;

export const MainInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
  font-size: 14px;
  font-family: 'ManropeMedium', sans-serif;
  line-height: 1.5;
`;

export const CarModel = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const SecondaryInfoWrap = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 28px;
  overflow: hidden;

  font-size: 12px;
  line-height: 1.5;
  color: #12141780;

  width: 270px;
  height: 40px;
`;

export const CardButton = styled.button`
  width: 100%;
  height: 44px;
  padding: 0px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  transition: all 250ms;
  cursor: pointer;

  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0px;
  margin-bottom: -29px;
  padding: 0px;
  position: relative;
  top: 14px;
  left: 251px;
  cursor: pointer;
`;

export const FavNormIcon = styled(FavIconNormal)``;
export const FavSelectedIcon = styled(FavIconSelected)``;
