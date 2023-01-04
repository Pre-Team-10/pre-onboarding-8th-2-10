import styled from "styled-components";
import { FaBookOpen, FaPlusCircle } from "react-icons/fa";

interface MyModal {
  modal: boolean;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1px;
  background-color: #edbc5f;
`;

const Wrapper = styled.div`
  width: 1100px;
  min-height: 600px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ItemBox = styled.div`
  background-color: rgb(251, 241, 241);
  width: 340px;
  height: 100%;
  padding: 10px;
  margin: 10px;
  margin-bottom: 100px;
  border-radius: 3px;
  h2 {
    text-align: center;
    line-height: 60px;
  }
`;

const Item = styled.p`
  cursor: move;
  width: 300px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
`;

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
    width: 60px;
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

const BookIcon = styled(FaBookOpen)`
  font-size: 20px;
  color: #312e2e;
  cursor: pointer;
`;
const PlusIcon = styled(FaPlusCircle)`
  font-size: 40px;
  color: #312e2e;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
  display: block;
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  ItemBox,
  Item,
  BackModal,
  WhiteModal,
  InputBox,
  BookIcon,
  PlusIcon,
};
