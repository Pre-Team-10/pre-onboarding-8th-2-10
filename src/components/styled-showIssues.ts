import styled from "styled-components";

export const IssueKanban = styled.div`
  min-width: 400px;
  display: flex;
  background: linear-gradient(45deg, blue, pink);
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
