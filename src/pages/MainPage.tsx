import React, { useState } from "react";
import {
  Container,
  BackModal,
  WhiteModal,
  Wrapper,
  ItemBox,
  Item,
  AddBtn,
} from "./styled";

function MainPage() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <Container>
      <BackModal modal={modal}>
        <WhiteModal>
          <p>제목</p>
          <input type="text" placeholder="제목을 입력해주세요." />
          <p>내용</p>
          <textarea name="Contents" placeholder="내용을 입력해주세요." />
          <p>마감일</p>
          <input type="datetime-local" />
          <p>담당자</p>
          <input type="text" />
          <p>상태</p>
          <select name="type">
            <option>To do</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </WhiteModal>
      </BackModal>

      <Wrapper>
        <ItemBox>
          <h2>To do</h2>
          <Item
            onClick={() => {
              setModal(true);
            }}
          >
            asdasd asdasdasd
          </Item>
          <AddBtn
            onClick={() => {
              setModal(true);
            }}
          >
            + Add a Card
          </AddBtn>
        </ItemBox>
        <ItemBox>
          <h2>Doing</h2>
        </ItemBox>
        <ItemBox>
          <h2>Done</h2>
        </ItemBox>
      </Wrapper>
    </Container>
  );
}

export default MainPage;
