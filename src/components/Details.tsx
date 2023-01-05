import React from "react";
import styled from "styled-components";
import type { Iprops } from "../pages/Main";

function Details({ modalOpen }: Iprops) {
  const Detail = styled.section`
    width: 500px;
  `;

  console.log(modalOpen);

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
    </Detail>
  );
}

export default Details;
