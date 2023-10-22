import styled from 'styled-components';
// import { Suspense as SuspenseModule } from "react";

export const MainWrap = styled.main`
  max-width: 1440px;
  min-height: 100vh;
  /* max-width: 100vw; */
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const PageContainer = styled.div`
  padding: 150px 128px;
  display: flex;
  flex-direction: column;
  width: 100%;

  transition: 250ms ease-in-out;
`;

export const SidebarOverlay = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  position: fixed;
  width: 1440px;
  height: 100vh;
  transition: all 250ms;
`;

// export const Suspense = styled(SuspenseModule)`
//   flex-grow: 1;
//   padding-top: 32px;
// `;

// export const SpinnerWrap = styled.div`
//   position: absolute;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
