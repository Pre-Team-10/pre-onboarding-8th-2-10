import styled from "styled-components";

export const InputBlock = styled.div<{ isEntered?: boolean }>`
  width: 500px;
  background-color: ${({ isEntered }) => (isEntered ? "white" : "tomato")};
`;
export const MainTitle = styled.h2`
  font-weight: 500;
  text-align: center;
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
export const AddIssueButton = styled.button`
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
  margin-top: 10px;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
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
`;
export const Modal = styled.div`
  width: 550px;
  height: 620px;
  margin: auto;
  padding: 10px;
  padding-left: 50px;
  background-color: white;
  border-radius: 25px;
`;
export const ModalFormTitle = styled.h2`
  text-align: center;
`;
export const ModalTitle = styled.h1`
  font-size: 20px;
`;
export const ModalInput = styled.input`
  width: 99%;
  margin-bottom: 5px;
  border: 1px solid;
  font-size: 20px;
`;
export const ModalTextarea = styled.textarea`
  width: 99%;
  height: 100px;
  margin-bottom: 5px;
  font-size: 20px;
`;
export const ModalSelect = styled.select`
  width: 100%;
  margin-bottom: 5px;
  font-size: 20px;
`;
export const OptionsSection = styled.span`
  position: relative;
`;
export const Option = styled.option``;
export const OptionsList = styled.section`
  width: 100%;
  position: absolute;
  background-color: white;
  cursor: pointer;
  ${Option} {
    padding: 12px 6px;
    transition: all 0.3s;
    &:hover {
      background-color: #eaecee;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;
