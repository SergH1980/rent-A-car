import { useState } from 'react';
import {
  StyledFormBox,
  FilterWrap,
  FilterLabel,
  FilterInput,
  FilterList,
  MileageWrap,
  FromInput,
  ToInput,
  SubmitButton,
} from './FilterForm.styled';

export default function FilterForm() {
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
  const [selectedOption, setSelectedOption] = useState('');
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  const priceArray = arrayRange(10, 500, 10);
  console.log(priceArray);

  const handleDropdownChange = event => {
    setSelectedOption(event.target.value);
    document.activeElement.blur();
  };
  return (
    <StyledFormBox>
      <FilterWrap>
        <FilterLabel>Car brand</FilterLabel>
        <FilterInput value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Enter the text</option>
          {makes.map((make, index) => (
            <FilterList value={make} key={index}>
              {make}
            </FilterList>
          ))}
        </FilterInput>
      </FilterWrap>
      <FilterWrap>
        <FilterLabel>Price/ 1 hour</FilterLabel>
        <FilterInput value={selectedOption} onChange={handleDropdownChange}>
          <option value="">To $</option>
          {priceArray.map((price, index) => (
            <FilterList value={price} key={index}>
              {price}
            </FilterList>
          ))}
        </FilterInput>
      </FilterWrap>
      <FilterWrap>
        <FilterLabel>Car mileage / km</FilterLabel>
        <MileageWrap>
          <FromInput placeholder="From" type="text"></FromInput>
          <ToInput placeholder="From" type="text"></ToInput>
        </MileageWrap>
      </FilterWrap>
      <SubmitButton type="submit">Search</SubmitButton>
    </StyledFormBox>
  );
}
