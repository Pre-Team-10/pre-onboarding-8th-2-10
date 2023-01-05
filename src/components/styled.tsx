import styled from "styled-components";

interface MyModal {
  modal: boolean;
}
interface MyModal2 {
  isHaveInputValue: boolean;
}
const BackModal = styled.p<MyModal>`
  display: ${(props) => (props.modal === false ? "none" : "block")};
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
const InputBox = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 6%;
  p {
    width: 70px;
  }
  input {
    width: 70%;
    padding: 7px;
    margin: 0 auto;
  }
  textarea {
    width: 70%;
    height: 200px;
    margin: 0 auto;
    resize: none;
  }
  select {
    width: 70%;
    margin: 0 auto;
  }

  button {
    width: 40%;
    margin: 0 auto;
  }
`;

const HiddenBox = styled.div<MyModal2>`
  display: ${(props) => (props.isHaveInputValue === false ? "none" : "block")};
  position: fixed;
  width: 230px;
  overflow-y: scroll;
  z-index: 55;
  background-color: red;
  margin-top: 33px;
  margin-left: 82px;
`;
export { BackModal, WhiteModal, InputBox, HiddenBox };
