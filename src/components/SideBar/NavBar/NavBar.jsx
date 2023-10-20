import { NavBarData } from "./NavBarData";
import { NavList, NavItem, NavLink, NavItemTitle } from "./NavBar.styled";

export default function NavBar({ onSidebarToggle }) {
  return (
    <nav>
      <NavList>
        {NavBarData.map((item, index) => {
          return (
            <NavItem key={index}>
              <NavLink to={item.path} onClick={onSidebarToggle}>
                {item.icon}
                <NavItemTitle>{item.title}</NavItemTitle>
              </NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </nav>
  );
}
