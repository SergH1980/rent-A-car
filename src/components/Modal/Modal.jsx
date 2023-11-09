import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import {
  ModalWrap,
  ModalOverlay,
  ImageHolder,
  CarImg,
  ModalCloseButton,
  VscChromeClose,
  CarHeader,
  CarModel,
  SecondaryInfoWrap,
  Description,
  OptionsWrap,
  OptionsList,
  OptionsHead,
  ConditionsWrap,
  ConditionsHead,
  ConditionList,
  ConditionLine,
  ConditionItem,
  ConditionValue,
  RentalButton,
  PhoneLink,
} from './Modal.styled';

export default function Modal({ open, onClose, card }) {
  useEffect(() => {
    const closeMenuByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
    };
  }, [onClose]);
  if (!open) return null;
  const rentalConditions = card.rentalConditions.split('\n');
  const drivingAge = rentalConditions[0].split(': ');
  const address = card.address.split(`, `);
  const country = address[address.length - 1];
  const city = address[address.length - 2];
  const imgURL = card.img ? card.img : card.photoLink;
  const secondaryInfoFirst = [
    city,
    country,
    `Id: ${card.id}`,
    `Year: ${card.year}`,
    `Type: ${card.type}`,
  ].join(' | ');
  const secondaryInfoSecond = [
    `Fuel Consumption: ${card.fuelConsumption}`,
    `Engine Size: ${card.engineSize}`,
  ].join(' | ');
  // const modalMilage = card.mileage.slice(0, 1)];
  const onModalOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const stringMileage = card.mileage.toString();
  let newMileage = [];
  if (stringMileage.length > 3) {
    newMileage = [
      stringMileage.slice(0, -3),
      ',',
      stringMileage.slice(-3),
    ].join(``);
  } else {
    newMileage = stringMileage;
  }

  return ReactDom.createPortal(
    <>
      <ModalOverlay onClick={onModalOverlayClick}></ModalOverlay>

      <ModalWrap>
        <ModalCloseButton type="button" onClick={onClose}>
          <VscChromeClose size={24} />
        </ModalCloseButton>
        <ImageHolder>
          <CarImg src={imgURL} alt={card.make} />
        </ImageHolder>
        <CarHeader>
          {card.make} <CarModel>{card.model}</CarModel>, {card.year}
        </CarHeader>
        <SecondaryInfoWrap>
          <div>{secondaryInfoFirst}</div>
          <div>{secondaryInfoSecond}</div>
        </SecondaryInfoWrap>
        <Description>{card.description}</Description>
        <OptionsWrap>
          <OptionsHead>Accessories and functionalities:</OptionsHead>
          <OptionsList>
            <div>{card.accessories.join(' | ')}</div>
            <div>{card.functionalities.join(' | ')}</div>
          </OptionsList>
        </OptionsWrap>
        <ConditionsWrap>
          <ConditionsHead>Rental Conditions:</ConditionsHead>
          <ConditionList>
            <ConditionLine>
              <ConditionItem>
                Minimum age: <ConditionValue>{drivingAge[1]}</ConditionValue>
              </ConditionItem>
              <ConditionItem>{rentalConditions[1]}</ConditionItem>
            </ConditionLine>
            <ConditionLine>
              <ConditionItem>{rentalConditions[1]}</ConditionItem>
              <ConditionItem>
                Mileage: <ConditionValue>{newMileage}</ConditionValue>
              </ConditionItem>
              <ConditionItem>
                Price: <ConditionValue>{card.rentalPrice}</ConditionValue>
              </ConditionItem>
            </ConditionLine>
          </ConditionList>
        </ConditionsWrap>
        <RentalButton type="button">
          <PhoneLink
            href="tel:+380730000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </PhoneLink>
        </RentalButton>
      </ModalWrap>
    </>,
    document.getElementById('modal')
  );
}
