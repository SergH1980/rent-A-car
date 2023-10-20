import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadMoreBtn } from "./CatalogPage.styled";
import { getCars, loadMoreCars } from "../../redux/cars/operations";
import FilterForm from "../../components/FilterForm/FilterForm";
import CatalogCards from "../../components/common/CatalogCards/CatalogCards";
import { selectCars } from "../../redux/cars/selectors";

const CatalogPage = () => {
  const carList = useSelector(selectCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const cardLimit = 8;

  useEffect(() => {
    dispatch(getCars(cardLimit));
    setPage(2);
  }, [dispatch]);

  function onLoadMoreCars() {
    setPage(page + 1);
    dispatch(loadMoreCars(page));
  }
  return (
    <>
      <FilterForm />

      <CatalogCards cardsArray={carList} />

      {page < 6 && (
        <LoadMoreBtn type="button" onClick={onLoadMoreCars}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
