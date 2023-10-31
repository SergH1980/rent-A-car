import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreBtn } from './CatalogPage.styled';
import { getCars, loadMoreCars } from '../../redux/cars/operations';
import FilterForm from '../../components/FilterForm/FilterForm';
import CatalogCards from '../../components/common/CatalogCards/CatalogCards';
import { selectCars, filteredCars } from '../../redux/cars/selectors';

const CatalogPage = () => {
  let renderedList = [];
  const carList = useSelector(selectCars);
  const filteredList = useSelector(filteredCars);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cardLimit = 8;

  useEffect(() => {
    dispatch(getCars(cardLimit));
    setPage(2);
  }, [dispatch]);

  function onLoadMoreCars() {
    dispatch(loadMoreCars(page));
    setPage(page + 1);
  }

  filteredList.length > 0
    ? (renderedList = filteredList)
    : (renderedList = carList);

  return (
    <>
      <FilterForm />

      <CatalogCards cardsArray={renderedList} />

      {page < 6 && (
        <LoadMoreBtn type="button" onClick={onLoadMoreCars}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
