import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../../redux/cars/selectors';
import Modal from 'components/Modal/Modal';
import {
  CardListWrap,
  CarCard,
  ImageHolder,
  CarImg,
  MainInfoWrap,
  CarModel,
  SecondaryInfoWrap,
  CardButton,
  FavoriteButton,
  FavNormIcon,
  FavSelectedIcon,
} from './CatalogCards.styled';

export default function CatalogCards({ cardsArray, setLocalList, page }) {
  const [favClicked, setFavClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCard, setClickedCard] = useState(``);
  const cardList = useSelector(selectCars);
  let favCards = [];

  if (localStorage.getItem('favListItems')) {
    favCards = JSON.parse(localStorage.getItem('favListItems'));
  }

  function handleFavClick(e) {
    setFavClicked(!favClicked);
    const selectedCard = cardList.find(card => card.id === e.currentTarget.id);

    let isRepeating = favCards.some(card => card.id === selectedCard.id);
    if (isRepeating) {
      const updatedArray = favCards.filter(card => card.id !== selectedCard.id);
      localStorage.setItem('favListItems', JSON.stringify(updatedArray));
    } else {
      favCards.push(selectedCard);
      localStorage.setItem('favListItems', JSON.stringify(favCards));
    }
    if (setLocalList) {
      setLocalList(JSON.parse(localStorage.getItem('favListItems')));
    }
  }
  function onOpen(event) {
    setClickedCard(event.currentTarget.getAttribute('car'));
    setIsModalOpen(true);
  }

  function onClose() {
    setIsModalOpen(false);
  }
  return (
    <CardListWrap>
      {cardsArray.map(card => {
        const address = card.address.split(`, `);
        const country = address[address.length - 1];
        const city = address[address.length - 2];
        const imgURL = card.img ? card.img : card.photoLink;
        const isInFavorite = favCards.some(item => item.id === card.id);

        const secondaryInfo = [
          city,
          country,
          card.rentalCompany,
          card.type,
          card.fuelConsumption,
          card.id,
          card.accessories[0],
        ].join(' | ');

        return (
          <CarCard key={card.id}>
            <FavoriteButton type="button" onClick={handleFavClick} id={card.id}>
              {isInFavorite ? <FavSelectedIcon /> : <FavNormIcon />}
            </FavoriteButton>
            <ImageHolder>
              <CarImg src={imgURL} alt={card.make} />
            </ImageHolder>
            <MainInfoWrap>
              <div>
                {card.make} <CarModel>{card.model}</CarModel>, {card.year}
              </div>
              <div>{card.rentalPrice}</div>
            </MainInfoWrap>
            <SecondaryInfoWrap>{secondaryInfo}</SecondaryInfoWrap>
            <div>
              <CardButton type="button" onClick={onOpen} car={card.id}>
                Learn more
              </CardButton>
              {clickedCard === card.id && (
                <Modal open={isModalOpen} onClose={onClose} card={card}></Modal>
              )}
            </div>
          </CarCard>
        );
      })}
    </CardListWrap>
  );
}
