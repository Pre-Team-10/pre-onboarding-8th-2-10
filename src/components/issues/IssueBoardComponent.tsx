import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../app/kanbanSlice";
import { IssueBoard, KanbanHeader, AddIssueButton } from "../../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../../utils/types";
import IssueComponent from "./IssueComponent";

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

  const handleOnAddButtonClick = useCallback(() => {
    console.log("오픈모달");
  }, []);

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
      <AddIssueButton type="button" onClick={handleOnAddButtonClick}>
        + ADD
      </AddIssueButton>
    </IssueBoard>
  );
}

export default IssueBoardComponent;
