import React from "react";
import styled from "styled-components";

function Detail() {
  const DetailWrap = styled.section`
    display: none;
    width: 500px;
  `;

  return (
    <DetailWrap>
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
    </DetailWrap>
  );
}

export default Detail;
