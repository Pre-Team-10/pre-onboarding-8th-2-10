import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../app/kanbanSlice";
import useIssueDrag from "../../hooks/useIssueDrag";
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
  toggleModal: (issueState: string) => void;
}) {
  const dispatch = useDispatch();
  const { setDraggedEnd } = useIssueDrag();
  // const [isDebounced, setIsDebounced] = useState(false);
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
  const handleOnDragOver = (e: React.MouseEvent<HTMLDivElement>) =>
    e.preventDefault();
  const handleOnIssueDrop = () => setDraggedEnd(issueState);
  return (
    <IssueBoard onDragOver={handleOnDragOver} onDrop={handleOnIssueDrop}>
      <KanbanHeader>{issueState}</KanbanHeader>
      {issueArray.map((issue, index) => (
        <IssueComponent
          key={issue.id}
          issue={issue}
          isFirstIndex={index === 0}
          handleOnDeleteButtonClick={handleOnDeleteButtonClick}
          handleOnModifyButtonClick={handleOnModifyButtonClick}
        />
      ))}
      <IssueAddButton type="button" onClick={() => toggleModal(issueState)}>
        + ADD
      </IssueAddButton>
    </IssueBoard>
  );
}

export default IssueBoardComponent;
