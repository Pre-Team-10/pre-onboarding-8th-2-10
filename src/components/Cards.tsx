import React from "react";
import styled from "styled-components";
import Details from "./Details";
// import type { ModalType } from "../pages/Main";

interface Iprops {
  subject: string;
  // modal: ModalType[];
}

function Cards({ subject }: Iprops) {
  const Card = styled.li`
    margin: 20px 0px;
    padding: 20px;
    font-size: 21px;
    color: #111;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
    border-radius: 12px;
  `;

  const Subject = styled.h3`
    display; block;
    padding: 5px 0;
    font-size: 31px;
    line-height: 1.5;
    `;

  const ButtonWrap = styled.div`
    height: 100%;
    text-align: right;
  `;

  const DetailBtn = styled.button`
    all: unset;
    padding: 5px 10px;
    font-size: 19px;
    color: #111;
    cursor: pointer;
  `;

  const ModifyBtn = styled.button`
    all: unset;
    padding: 5px 10px;
    font-size: 19px;
    color: #111;
    cursor: pointer;
  `;

  const DeleteBtn = styled.button`
    all: unset;
    padding: 5px 10px;
    font-size: 19px;
    color: #111;
    cursor: pointer;
  `;

  return (
    <>
      <Card>
        <Subject>{subject}</Subject>
        <ButtonWrap>
          <DetailBtn type="button">확인</DetailBtn>
          <ModifyBtn type="button">수정</ModifyBtn>
          <DeleteBtn type="button">삭제</DeleteBtn>
        </ButtonWrap>
      </Card>

      <Details />
    </>
  );
}

export default Cards;
