import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../app/kanbanSlice";
import { IssueBoard, KanbanHeader, IssueAddButton } from "../../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../../utils/types";
import IssueComponent from "./IssueComponent";

function IssueBoardComponent({
  issueArray,
  issueState,
  pickTargetIssue,
  toggleModal,
}: {
  issueArray: Array<InterfaceIssue>;
  issueState: IssueStateEnum;
  pickTargetIssue: (targetIssue: InterfaceIssue) => void;
  toggleModal: () => void;
}) {
  const dispatch = useDispatch();
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
  return (
    <IssueBoard>
      <KanbanHeader>{issueState}</KanbanHeader>
      {issueArray.map((issue) => (
        <IssueComponent
          key={issue.id}
          issue={issue}
          handleOnDeleteButtonClick={handleOnDeleteButtonClick}
          handleOnModifyButtonClick={handleOnModifyButtonClick}
        />
      ))}
      <IssueAddButton type="button" onClick={toggleModal}>
        + ADD
      </IssueAddButton>
    </IssueBoard>
  );
}

export default IssueBoardComponent;
