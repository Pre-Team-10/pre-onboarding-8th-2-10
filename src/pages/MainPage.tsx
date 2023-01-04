/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIssue } from "../app/kanbanSlice";
import {
  Container,
  BackModal,
  WhiteModal,
  Wrapper,
  ItemBox,
  Item,
  BookIcon,
  PlusIcon,
  InputBox,
} from "./styled";
import { RootState } from "../app/store";

function MainPage() {
  const [modal, setModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const myIssue = useSelector((state: RootState) => state.issueInformation);
  const [test, setTest] = useState({
    id: 0,
    title: "",
    content: "",
    due: "",
    manager: "",
    state: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setTest({
      ...test,
      [name]: value,
    });
  };

  // useEffect(() => {

  // }, []);
  const teee = myIssue.issue;
  return (
    <Container>
      <BackModal modal={modal}>
        <WhiteModal>
          <InputBox>
            <p>제목</p>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <p>내용</p>
            <textarea
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <p>마감일</p>
            <input
              type="datetime-local"
              name="due"
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <p>담당자</p>
            <input
              type="text"
              name="manager"
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <p>상태</p>
            <select name="state" onChange={handleChange} required>
              <option>To do</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </InputBox>
          <InputBox>
            <button
              type="button"
              onClick={() => {
                dispatch(addIssue(test));
              }}
            >
              확인
            </button>
            <button
              type="button"
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
          </InputBox>
        </WhiteModal>
      </BackModal>
      <PlusIcon
        onClick={() => {
          setModal(true);
        }}
      />
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
        </ItemBox>

        <ItemBox>
          <h2>Doing</h2>
          {teee.map((param) => {
            return (
              <Item>
                <p>{param.title}</p>
                <BookIcon
                  onClick={() => {
                    setModal(true);
                  }}
                />
              </Item>
            );
          })}
        </ItemBox>
        <ItemBox>
          <h2>Done</h2>
        </ItemBox>
      </Wrapper>
    </Container>
  );
}

export default MainPage;
