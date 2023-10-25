import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReturnButton, EmptyList } from './FavoritePage.styled';

import CatalogCards from '../../components/common/CatalogCards/CatalogCards';

const FavoritePage = () => {
  const navigate = useNavigate();
  const [favCardList, setFavCardList] = useState([]);
  const [localList, setLocalList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favListItems')) {
      setFavCardList(JSON.parse(localStorage.getItem('favListItems')));
    }
  }, [localList]);

  const navigateToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <>
      {favCardList.length > 0 ? (
        <CatalogCards cardsArray={favCardList} setLocalList={setLocalList} />
      ) : (
        <>
          <EmptyList>You have no cars in your list!!!</EmptyList>
          <ReturnButton onClick={navigateToCatalog}>
            Return to catalog page
          </ReturnButton>
        </>
      )}
    </>
  );
};

export default FavoritePage;
