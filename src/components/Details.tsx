import React from "react";
import styled from "styled-components";
import type { Iprops } from "../pages/Main";

function Details({ modalOpen, setModalOpen }: Iprops) {
  const Detail = styled.section<{ modalOpen: Boolean }>`
    display: ${modalOpen ? "block" : "none"};
    width: 500px;
  `;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Detail>
      <div>
        <h3>타이틀</h3>
        <div>
          <input type="text" placeholder="" />
        </div>
        <span>담당자</span>
        <div>
          <input type="text" placeholder="" />
        </div>
        <span>날짜</span>
        <div>
          <input type="date" />
        </div>
        <span>내용</span>
        <div>
          <input type="text" placeholder="" />
        </div>
        <span>완료여부</span>
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <button type="button" onClick={() => closeModal()}>
        닫기
      </button>
    </Detail>
  );
}

export default Details;
