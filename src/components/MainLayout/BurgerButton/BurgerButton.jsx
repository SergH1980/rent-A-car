import { BurgerBtn, BurgerIcon } from "./BurgerButton.styled";

export default function BurgerButton({ onSidebarToggle }) {
  return (
    <BurgerBtn type="button" onClick={onSidebarToggle}>
      <BurgerIcon />
    </BurgerBtn>
  );
}
