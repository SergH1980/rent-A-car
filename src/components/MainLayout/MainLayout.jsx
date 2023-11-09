import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BurgerButton from './BurgerButton/BurgerButton';
import SideBar from '../SideBar/SideBar';
import { Bars } from 'react-loader-spinner';

import {
  MainWrap,
  Container,
  PageContainer,
  SidebarOverlay,
  SpinnerWrap,
} from './MainLayout.styled';

export default function MainLayout() {
  const [sideBarVisible, setSitebarVisible] = useState(false);

  const onSidebarToggle = () => {
    setSitebarVisible(state => !state);
  };

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onSidebarToggle();
    }
  };
  return (
    <MainWrap>
      {sideBarVisible && (
        <SidebarOverlay onClick={onOverlayClick}></SidebarOverlay>
      )}
      <Container>
        {sideBarVisible && <SideBar onSidebarToggle={onSidebarToggle} />}

        <PageContainer>
          <BurgerButton onSidebarToggle={onSidebarToggle} />

          <Suspense
            fallback={
              <SpinnerWrap>
                <Bars height="180" width="180" color={'#3E85F3'} />
              </SpinnerWrap>
            }
          >
            <Outlet />
          </Suspense>
        </PageContainer>
      </Container>
    </MainWrap>
  );
}
