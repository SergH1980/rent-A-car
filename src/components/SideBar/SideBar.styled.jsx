import styled from "styled-components";

export const SideBarWrap = styled.div`
  background-color: #eeecec;
  opacity: 0.7;
  display: flex;
  flex-direction: column;

  align-items: center;

  position: fixed;
  padding: 150px 20px;

  top: 0;

  width: 260px;
  min-height: 100vh;
`;

export const LogoPhrase = styled.div`
  font-size: 36px;
  margin-bottom: 150px;
  font-weight: 600;
`;

export const LogoA = styled.span`
  color: #3470ff;
  font-size: 60px;
  font-weight: 800;
  vertical-align: sub;
`;
