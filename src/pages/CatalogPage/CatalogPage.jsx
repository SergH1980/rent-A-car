import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  filteredCars,
  isLoading,
} from '../../redux/cars/selectors';
import {
  LoadMoreBtn,
  ReturnButton,
  SpinnerWrap,
  NoResultWrap,
  NoResultHeader,
  NoResultText,
} from './CatalogPage.styled';
import { getCars, loadMoreCars } from '../../redux/cars/operations';
import FilterForm from '../../components/FilterForm/FilterForm';
import CatalogCards from '../../components/common/CatalogCards/CatalogCards';
import { Bars } from 'react-loader-spinner';

const CatalogPage = () => {
  let renderedList = [];
  const carList = useSelector(selectCars);
  const filteredList = useSelector(filteredCars);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filterOn, setFilterOn] = useState(false);
  const cardLimit = 8;

  useEffect(() => {
    dispatch(getCars(cardLimit));
    setFilterOn(false);
    setPage(2);
  }, [dispatch]);

  function onLoadMoreCars(e) {
    e.preventDefault();
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
      {loading ? (
        <SpinnerWrap>
          <Bars height="180" width="180" color={'#3E85F3'} />
        </SpinnerWrap>
      ) : filterOn && filteredList.length === 0 ? (
        <NoResultWrap>
          <NoResultHeader>Sorry.</NoResultHeader>
          <NoResultText>
            We were unable to find any matching results.
          </NoResultText>
          <NoResultText>Please try other options!!!</NoResultText>
        </NoResultWrap>
      ) : (
        <CatalogCards cardsArray={renderedList} />
      )}

      {!loading && filterOn && (
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
