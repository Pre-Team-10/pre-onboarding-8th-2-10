import React from "react";
import Details from "./Details";
import type { Iprops } from "../pages/Main";
import * as S from "./styled-card";

function Cards({ subject, handleModal, modalOpen, setModalOpen }: Iprops) {
  return (
    <>
      <S.Card>
        <S.Subject>{subject}</S.Subject>
        <S.ButtonWrap>
          <S.DetailBtn type="button" onClick={() => handleModal()}>
            확인
          </S.DetailBtn>
          <S.ModifyBtn type="button">수정</S.ModifyBtn>
          <S.DeleteBtn type="button">삭제</S.DeleteBtn>
        </S.ButtonWrap>
      </S.Card>

      <Details modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default Cards;
