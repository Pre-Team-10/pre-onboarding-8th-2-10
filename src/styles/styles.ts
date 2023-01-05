import styled from "styled-components";

// export const InputBlock = styled.div<{ isEntered?: boolean }>`
//   width: 250px;
//   background-color: ${({ isEntered }) => (isEntered ? "aliceblue" : "tomato")};
// `;

// export const IssueKanban = styled.div`
//   min-width: 400px;
//   display: flex;
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

// export const IssueBoard = styled.div`
//   width: 33%;
//   min-height: 100px;
//   padding: 15px;
//   background-color: aqua;
//   @media screen and (max-width: 768px) {
//     width: 80%;
//     margin: auto;
//   }
// `;

// export const KanbanHeader = styled.header`
//   margin-bottom: 10px;
//   padding: 8px;
//   text-align: center;
//   background-color: aliceblue;
//   font-weight: bolder;
// `;

export const KanbanBlock = styled.div`
  margin-top: 10px;
  padding: 5px;
  background-color: beige;
`;

export const KanbanBlockFooter = styled.div`
  text-align: right;
`;

// export const ModalBackground = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

export const Modal = styled.div`
  width: 300px;
  height: 550px;
  margin: auto;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
`;

export const OptionsSection = styled.span`
  position: relative;
`;

export const Option = styled.option``;

export const OptionsList = styled.section`
  width: 250px;
  position: absolute;
  background-color: white;
  cursor: pointer;
  ${Option} {
    padding: 12px 6px;
    transition: all 0.3s;
    &:hover {
      background-color: aqua;
    }
  }
`;
