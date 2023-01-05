import React, { useState } from "react";
import DEFAULT_DATA from "../utils/defaultdata";
import Cards from "../components/Cards";
import * as S from "./styled";

export interface Iprops {
  subject: string;
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  handleModal: () => void;
}

function Main() {
  const [inputSubject, setInputSubject] = useState("");
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setInputSubject(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSubject("");
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <S.Container>
      <S.Wrap>
        {DEFAULT_DATA.map(({ list_id, list_title, card_contents }) => (
          <S.Section key={list_id}>
            <S.Title>{list_title}</S.Title>
            <S.List>
              {card_contents.map(({ id, subject }) => (
                <Cards
                  key={id}
                  subject={subject}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  handleModal={handleModal}
                />
              ))}
              <S.InputWrap onSubmit={handleSubmit}>
                <S.SubjectInput
                  type="text"
                  placeholder="제목을 입력하세요"
                  value={inputSubject}
                  onChange={onChange}
                />
                <S.SubjectAddBtn type="submit">추가</S.SubjectAddBtn>
              </S.InputWrap>
            </S.List>
          </S.Section>
        ))}
      </S.Wrap>
    </S.Container>
  );
}

export default Main;
