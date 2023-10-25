import { useEffect } from 'react';
import { SideBarWrap, LogoPhrase, LogoA } from './SideBar.styled';
import NavBar from './NavBar/NavBar';

export default function SideBar({ onSidebarToggle }) {
  useEffect(() => {
    const closeMenuByEsc = e => {
      if (e.code === 'Escape') {
        onSidebarToggle();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
    };
  }, [onSidebarToggle]);

  return (
    <SideBarWrap>
      <LogoPhrase>
        Rent-<LogoA>A</LogoA>-Car
      </LogoPhrase>
      <NavBar onSidebarToggle={onSidebarToggle} />
    </SideBarWrap>
  );
}
