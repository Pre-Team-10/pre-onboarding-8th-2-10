import React, { useState } from "react";
import styled from "styled-components";
import DEFAULT_DATA from "../utils/defaultdata";
import Cards from "../components/Cards";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

const Wrap = styled.section`
  display: flex;
  flex-dirction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 1800px;
  min-width: 1800px;
  margin: 0;
  padding: 40px;
`;

const Section = styled.div`
  width: 420px;
  height: auto;
  max-height: 1200px;
  min-height: 230px;
  margin: 20px auto;
  padding: 40px 0 20px;
  justify-content: space-between;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 41px;
  font-weight: bold;
  text-align: center;
`;

const List = styled.ul`
  margin: 0px 20px 10px;
  padding: 20px;
`;

const InputWrap = styled.form`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
`;

const SubjectInput = styled.input`
  width: calc(100% - 50px);
  height: 30px;
  padding: 0 10px;
  font-size: 19px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

const SubjectAddBtn = styled.button`
  all: unset;
  width: 50px;
  font-size: 19px;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
`;

// interface ModalType {
//   modalOpen: boolean;
//   setModalOpen: (modalOpen: boolean) => void;
//   handleModal: (test: boolean) => void;
// }

export interface Iprops {
  subject: string;
  // modalOpen: ModalType;
  // setModalOpen: ModalType;
  // handleModal: ModalType;
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  handleModal: () => void;
}

function Main() {
  const [inputSubject, setInputSubject] = useState("");
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // const element = (e.target as HTMLInputElement).value;
    const {
      currentTarget: { value },
    } = e;
    setInputSubject(value);
    // setInputSubject(e.currentTarget.value);
    // console.log(inputSubject);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit();
    setInputSubject("");
  };

  const handleModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };

  return (
    <Container>
      <Wrap>
        {DEFAULT_DATA.map(({ list_id, list_title, card_contents }) => (
          <Section key={list_id}>
            <Title>{list_title}</Title>
            <List>
              {card_contents.map(({ id, subject }) => (
                <Cards
                  key={id}
                  subject={subject}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  handleModal={handleModal}
                />
              ))}
              <InputWrap onSubmit={handleSubmit}>
                <SubjectInput
                  type="text"
                  placeholder="제목을 입력하세요"
                  value={inputSubject}
                  onChange={onChange}
                />
                <SubjectAddBtn type="submit">추가</SubjectAddBtn>
              </InputWrap>
            </List>
          </Section>
        ))}
      </Wrap>
    </Container>
  );
}

export default Main;
