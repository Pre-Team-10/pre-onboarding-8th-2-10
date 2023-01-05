/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BackModal, WhiteModal, InputBox, HiddenBox } from "./styled";
import { addIssue } from "../app/kanbanSlice";

type ModalType = {
  modal: boolean;
  setModal: Function;
};
function PlusModal(props: ModalType) {
  const dispatch = useDispatch();

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

  const mydata = [
    { name: "kim" },
    { name: "lee" },
    { name: "park" },
    { name: "keee" },
  ];
  const [query, setQuery] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);

  useEffect(() => {
    if (query === "") {
      setIsHaveInputValue(false);
    } else if (query !== "") {
      setIsHaveInputValue(true);
    }
  }, [query]);

  return (
    <BackModal modal={props.modal}>
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
            placeholder="담당자를 검색하세요..."
            value={query}
            onChange={(e) => {
              handleChange(e);
              setQuery(e.target.value);
            }}
            required
          />
          <HiddenBox isHaveInputValue={isHaveInputValue}>
            {mydata
              .filter((user) => user.name.toLowerCase().includes(query))
              .map((param, index) => (
                <p
                  onClick={(e) => {
                    setQuery(param.name);
                    setIsHaveInputValue(false);
                  }}
                  aria-hidden="true"
                >
                  {param.name}
                </p>
              ))}
          </HiddenBox>
        </InputBox>
        <InputBox>
          <p>상태</p>
          <select
            name="state"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          >
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
              props.setModal(false);
            }}
          >
            저장
          </button>
          <button
            type="button"
            onClick={() => {
              props.setModal(false);
            }}
          >
            취소
          </button>
        </InputBox>
      </WhiteModal>
    </BackModal>
  );
}

export default PlusModal;
