import styled from "styled-components";

interface MyModal {
  issueModal: boolean;
}
const BackModal = styled.p<MyModal>`
  display: ${(props) => (props.issueModal === false ? "none" : "block")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const WhiteModal = styled.div`
  background-color: white;
  width: 400px;
  height: 520px;
  margin: 0 auto;
  margin-top: 7%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export { BackModal, WhiteModal };
