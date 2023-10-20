import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReturnButton } from './FavoritePage.styled';

import FilterForm from '../../components/FilterForm/FilterForm';
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
      <FilterForm />
      {favCardList.length > 0 ? (
        <CatalogCards cardsArray={favCardList} setLocalList={setLocalList} />
      ) : (
        <ReturnButton onClick={navigateToCatalog}>
          Return to catalog page
        </ReturnButton>
      )}
    </>
  );
};

export default FavoritePage;
