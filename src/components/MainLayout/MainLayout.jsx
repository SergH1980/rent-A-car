import { useState, useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import BurgerButton from "./BurgerButton/BurgerButton";
import SideBar from "../SideBar/SideBar";

import {
  MainWrap,
  Container,
  PageContainer,
  SidebarOverlay,
} from "./MainLayout.styled";

export default function MainLayout() {
  const [sideBarVisible, setSitebarVisible] = useState(false);

  const onSidebarToggle = () => {
    setSitebarVisible((state) => !state);
  };

  const onOverlayClick = (event) => {
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

          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </PageContainer>
      </Container>
    </MainWrap>
  );
}
