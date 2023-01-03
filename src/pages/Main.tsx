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

  const Modify = styled.button`
    all: unset;
    padding: 5px 10px;
    color: #111;
    cursor: pointer;
  `;

  const Delete = styled.button`
    all: unset;
    padding: 5px 10px;
    color: #111;
    cursor: pointer;
  `;
  return (
    <Wrap>
      <Section>
        <Title>To Do</Title>
        <List>
          {DEFAULT_DATA.map((data) => (
            <Card key={data.id}>
              <Subject>{data.subject}</Subject>
              <ButtonWrap>
                <Modify type="button">수정</Modify>
                <Delete type="button">삭제</Delete>
              </ButtonWrap>
            </Card>
          ))}
        </List>
      </Section>
      <Section>
        <Title>Doing</Title>
        <List>
          {DEFAULT_DATA.map((data) => (
            <Card key={data.id}>
              {data.id}, {data.subject}
            </Card>
          ))}
        </List>
      </Section>
      <Section>
        <Title>Done</Title>
        <List>
          {DEFAULT_DATA.map((data) => (
            <Card key={data.id}>
              {data.id}, {data.subject}
            </Card>
          ))}
        </List>
      </Section>
    </Wrap>
  );
}

export default Main;
