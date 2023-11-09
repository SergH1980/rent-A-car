import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from 'redux/cars/operations';

import {
  StyledFormBox,
  BrandWrap,
  FilterLabel,
  FilterInput,
  FilterList,
  PriceWrap,
  MileageWrap,
  MileageInputWrap,
  FromInput,
  ToInput,
  SubmitButton,
} from './FilterForm.styled';

export default function FilterForm({ setFilterOn, returnToCatalog }) {
  const makes = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  const priceArray = arrayRange(10, 500, 10);

  const handleBrandChange = event => {
    setSelectedBrand(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleFromChange = event => {
    setSelectedFrom(event.target.value);
  };
  const handleToChange = event => {
    setSelectedTo(event.target.value);
  };

  const from = selectedFrom.replace(/\s/g, '');
  const to = selectedTo.replace(/\s/g, '');

  function onFilterCars(e) {
    e.preventDefault();
    if (
      selectedBrand === `` &&
      selectedPrice === `` &&
      from === '' &&
      to === ''
    ) {
      e.target.blur();
      return;
    }

    dispatch(
      getAllCars({
        brand: selectedBrand,
        price: selectedPrice,
        from: selectedFrom,
        to: selectedTo,
      })
    );
    setFilterOn(true);
    e.target.blur();
  }

  return (
    <StyledFormBox>
      <BrandWrap>
        <FilterLabel>Car brand</FilterLabel>
        <FilterInput value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Enter the text</option>
          {makes.map((make, index) => (
            <FilterList value={make} key={index}>
              {make}
            </FilterList>
          ))}
        </FilterInput>
      </BrandWrap>
      <PriceWrap>
        <FilterLabel>Price/ 1 hour</FilterLabel>
        <FilterInput value={selectedPrice} onChange={handlePriceChange}>
          <option value="">To $</option>
          {priceArray.map((price, index) => (
            <FilterList value={price} key={index}>
              {price}
            </FilterList>
          ))}
        </FilterInput>
      </PriceWrap>
      <MileageWrap>
        <FilterLabel>Car mileage / km</FilterLabel>
        <MileageInputWrap>
          <FromInput
            placeholder="From"
            type="text"
            onChange={handleFromChange}
            value={selectedFrom}
          ></FromInput>
          <ToInput
            placeholder="To"
            type="text"
            onChange={handleToChange}
            value={selectedTo}
          ></ToInput>
        </MileageInputWrap>
      </MileageWrap>
      <SubmitButton type="button" onClick={onFilterCars}>
        Search
      </SubmitButton>
    </StyledFormBox>
  );
}
