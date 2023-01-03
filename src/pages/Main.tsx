import React from "react";
import styled from "styled-components";
import DEFAULT_DATA from "../utils/defaultdata";

function Main() {
  const Wrap = styled.section`
    display: flex;
    justify-content: space-between;
    width: 1400px;
    margin: 0 auto;
    padding: 40px;
  `;

  const Section = styled.section`
    width: 33.33%;
    margin: 20px auto;
    justify-content: space-between;
  `;

  const Title = styled.h1`
    font-size: 31px;
    font-weight: bold;
    text-align: center;
  `;

  const List = styled.ul`
    margin: 20px;
    border: 1px solid blue;
  `;

  const Card = styled.li`
    margin: 20px 10px;
    padding: 20px;
    font-size: 21px;
    color: red;
    border: 1px solid #333;
  `;

  const Subject = styled.h2`
    display; block;
    padding: 5px 0;
    line-height: 1.5;
  `;

  const ButtonWrap = styled.div`
    display: block;
    height: 100%;
    text-align: right;
    background-color: yellow;
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
    <Wrap>
      {DEFAULT_DATA.map(({ list_id, list_title, card_contents }) => (
        <Section key={list_id}>
          <Title>{list_title}</Title>
          <List>
            {card_contents.map(({ id, subject }) => (
              <Card key={id}>
                <Subject>{subject}</Subject>
                <ButtonWrap>
                  <ModifyBtn type="button">수정</ModifyBtn>
                  <DeleteBtn type="button">삭제</DeleteBtn>
                </ButtonWrap>
              </Card>
            ))}
            <div>
              <input type="text" placeholder="제목을 입력하세요" />
              <button type="button">추가</button>
            </div>
          </List>
        </Section>
      ))}
    </Wrap>
  );
}

export default Main;
