import styled from "styled-components";

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
  margin-top: 5%;
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
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
`;
const AddBtn = styled.button`
  cursor: pointer;
  background-color: rgb(251, 241, 241);
  font-size: 17px;
  padding: 15px;
  margin-left: 10px;
  border: none;
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
  height: 500px;
  margin: 0 auto;
  margin-top: 7%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export { Container, Wrapper, ItemBox, Item, AddBtn, BackModal, WhiteModal };
