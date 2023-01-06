import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../app/kanbanSlice";
import {
  IssueBoard,
  KanbanHeader,
  AddIssueButton,
  ModalBackground,
} from "../../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../../utils/types";
import IssueComponent from "./IssueComponent";
import ModalComponent from "../modal/ModalComponent";

let targetIssueOpen: InterfaceIssue | undefined;

function IssueBoardComponent({
  issueArray,
  issueState,
  pickTargetIssue,
}: {
  issueArray: Array<InterfaceIssue>;
  issueState: IssueStateEnum;
  pickTargetIssue: (targetIssue: InterfaceIssue) => void;
}) {
  const dispatch = useDispatch();
  const [targetIssueId, setTargetIssueId] = useState(-1);
  const handleOnDeleteButtonClick = useCallback(
    (id?: number) => {
      if (id !== undefined)
        dispatch(deleteIssue({ targetId: id, targetState: issueState }));
    },
    [dispatch, issueState],
  );
  const handleOnModifyButtonClick = useCallback(
    (id?: number) => {
      if (id !== undefined) {
        const targetIssue = issueArray.find((issue) => issue.id === id);
        if (targetIssue) pickTargetIssue(targetIssue);
      }
    },
    [pickTargetIssue, issueArray],
  );

  const handleOnOpenButtonClick = useCallback(
    (id?: number) => {
      if (id !== undefined) {
        const targetIssue = issueArray.find((issue) => issue.id === id);
        if (targetIssue) pickTargetIssue(targetIssue);
      }
    },
    [pickTargetIssue, issueArray],
  );
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const handleOnAddButtonClick = useCallback(() => {
    setOpenModal(!isOpenModal);
    console.log("모달 클릭", targetIssueId);
  }, [isOpenModal, targetIssueId]);

  const hideModal = () => {
    setTargetIssueId(-1);
    targetIssueOpen = undefined;
    console.log("모달 바깥 부분 클릭 targetIssueId", targetIssueId);
  };

  return (
    <IssueBoard>
      <KanbanHeader>{issueState}</KanbanHeader>
      {issueArray.map((issue) => (
        <IssueComponent
          key={issue.id}
          issue={issue}
          handleOnDeleteButtonClick={handleOnDeleteButtonClick}
          handleOnModifyButtonClick={handleOnModifyButtonClick}
          handleOnOpenButtonClick={handleOnOpenButtonClick}
        />
      ))}
      {isOpenModal && targetIssueId !== 1 && (
        <ModalBackground onClick={hideModal}>
          <ModalComponent targetIssue={targetIssueOpen} hideModal={hideModal} />
        </ModalBackground>
      )}
      <AddIssueButton type="button" onClick={handleOnAddButtonClick}>
        + ADD
      </AddIssueButton>
    </IssueBoard>
  );
}

export default IssueBoardComponent;
