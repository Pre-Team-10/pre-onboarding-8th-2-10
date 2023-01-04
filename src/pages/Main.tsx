import React from "react";
import styled from "styled-components";
import DEFAULT_DATA from "../utils/defaultdata";
import Cards from "../components/Cards";

function Main() {
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

  const InputWrap = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 40px;
  `;

  const SubjectInput = styled.input`
    width: calc(100% - 50px);
    height: 30px;
    padding: 0 10px;
    font-size: 19px;
  `;

  const SubjectAddBtn = styled.button`
    all: unset;
    width: 50px;
    font-size: 19px;
    text-align: right;
    line-height: 1.5;
  `;

  return (
    <Container>
      <Wrap>
        {DEFAULT_DATA.map(({ list_id, list_title, card_contents }) => (
          <Section key={list_id}>
            <Title>{list_title}</Title>
            <List>
              {card_contents.map(({ id, subject }) => (
                <Cards key={id} subject={subject} />
              ))}
              <InputWrap>
                <SubjectInput type="text" placeholder="제목을 입력하세요" />
                <SubjectAddBtn type="button">추가</SubjectAddBtn>
              </InputWrap>
            </List>
          </Section>
        ))}
      </Wrap>
    </Container>
  );
}

export default Main;
