/* eslint-disable multiline-ternary */
import styled from "styled-components";

export const MainTitle = styled.h2`
  font-weight: 500;
  text-align: center;
  font-weight: bolder;
`;

export const IssueKanban = styled.div`
  min-width: 400px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const IssueBoard = styled.div`
  width: 300px;
  min-height: 100px;
  padding: 15px;
  background-color: #eaecee;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

export const IssueAddButton = styled.button`
  height: 28px;
  min-width: 56px;
  margin-top: 2px;
  font-weight: 700;
  font-size: 13px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const KanbanHeader = styled.header`
  margin-bottom: 10px;
  padding: 8px;
  text-align: center;
  background-color: #ffffff;
  font-weight: bolder;
`;

export const KanbanBlock = styled.div`
  margin: 12px 0;
  background-color: #ffffff;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  overflow: hidden;
`;

export const KanbanInner = styled.div<{
  isMouseOver?: boolean;
  isUpperIssue?: boolean;
}>`
  height: 50%;
  padding: 5px;
  background: ${({ isMouseOver, isUpperIssue }) =>
    isMouseOver
      ? `linear-gradient(to ${
          isUpperIssue ? "top" : "bottom"
        }, transparent, pink)`
      : "transparent"};
`;

export const KanbanTitle = styled.h1`
  font-size: 20px;
  margin-left: 20px;
`;

export const KanbanContent = styled.p`
  font-size: 15px;
  margin-left: 20px;
`;

export const KanbanManagerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-right: 10px;
  font-size: 12px;
`;

export const KanbanBlockFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-right: 10px;
  text-align: right;
`;

export const KanbanModifyButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 1px solid #1d1c1d4d;
  font-weight: 700;
  background: #fff;
  padding: 0 8px 1px;
  font-size: 13px;
  border-radius: 4px;
  color: rgb(29, 28, 29);
  height: 28px;
  min-width: 56px;
  transition: all 80ms linear;
  :hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
    background: rgba(248, 248, 248, 1);
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalFormTitle = styled.h2`
  text-align: center;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
`;

export const ModalInput = styled.input`
  margin-bottom: 5px;
  border: 1px solid;
`;

export const ModalTextarea = styled.textarea`
  height: 100px;
  margin-bottom: 5px;
  resize: none;
`;

export const ModalSelect = styled.select`
  margin-bottom: 5px;
`;

export const InputBlock = styled.div<{ isEntered?: boolean }>`
  width: 80%;
  box-sizing: border-box;
  ${ModalTitle} {
    color: ${({ isEntered }) => (isEntered ? "grey" : "tomato")};
  }
  ${ModalInput}, ${ModalTextarea}, ${ModalSelect} {
    width: 100%;
    padding: 8px;
    outline: none;
    border: none;
    background-color: #eee;
    box-sizing: border-box;
  }
`;

export const Modal = styled.div`
  width: 550px;
  height: 650px;
  background-color: white;
  border-radius: 25px;
  ${InputBlock} {
    margin: auto;
  }
`;

export const OptionsSection = styled.span`
  position: relative;
`;

export const Option = styled.option`
  padding: 12px 6px;
  transition: all 0.3s;
`;

export const OptionsList = styled.section`
  width: 100%;
  max-height: 170px;
  overflow-y: scroll;
  position: absolute;
  background-color: aliceblue;
  cursor: pointer;
  ${Option} {
    &:hover {
      background-color: white;
    }
  }
`;
