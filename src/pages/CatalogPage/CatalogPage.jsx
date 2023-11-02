import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreBtn, ReturnButton } from './CatalogPage.styled';
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
  const [filterOn, setFilterOn] = useState(false);
  const cardLimit = 8;

  useEffect(() => {
    dispatch(getCars(cardLimit));
    setFilterOn(false);
    setPage(2);
  }, [dispatch]);

  function onLoadMoreCars() {
    dispatch(loadMoreCars(page));
    setPage(page + 1);
  }

  function returnToCatalog() {
    window.location.pathname = `rent-A-car/catalog`;
  }

  filteredList.length > 0
    ? (renderedList = filteredList)
    : (renderedList = carList);

  return (
    <>
      <FilterForm setFilterOn={setFilterOn} returnToCatalog={returnToCatalog} />
      {filterOn && filteredList.length === 0 ? (
        <>
          <h3>Sorry</h3>
          <div>
            We were unable to find anything corrensponding to your quiry.
          </div>
          <div>Please try other options!!!</div>{' '}
        </>
      ) : (
        <CatalogCards cardsArray={renderedList} />
      )}
      {filterOn && (
        <ReturnButton onClick={returnToCatalog}>Return to catalog</ReturnButton>
      )}
      {!filterOn && page < 6 && (
        <LoadMoreBtn type="button" onClick={onLoadMoreCars}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
