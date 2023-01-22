import React from "react";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../redux/kanbanSlice";
import useIssueDrag from "../../hooks/useIssueDrag";
import { IssueBoard, KanbanHeader, IssueAddButton } from "../../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../../utils/types";
import IssueComponent from "./IssueComponent";

function IssueBoardComponent({
  issueArray,
  issueState,
  isDebounced,
  pickTargetIssue,
  toggleModal,
  setIsDebounced,
}: {
  issueArray: Array<InterfaceIssue>;
  issueState: IssueStateEnum;
  isDebounced: boolean;
  pickTargetIssue: (targetIssue: InterfaceIssue) => void;
  toggleModal: (issueState: string) => void;
  setIsDebounced: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const { setDraggedEnd } = useIssueDrag();
  const handleOnDeleteButtonClick = (id?: number) => {
    if (!isDebounced && id !== undefined) {
      dispatch(deleteIssue({ targetId: id, targetState: issueState }));
      setIsDebounced(true);
    }
  };
  const handleOnModifyButtonClick = (id?: number) => {
    if (!isDebounced && id !== undefined) {
      const targetIssue = issueArray.find((issue) => issue.id === id);
      if (targetIssue) {
        pickTargetIssue(targetIssue);
        setIsDebounced(true);
      }
    }
  };
  const handleOnDragOver = (e: React.MouseEvent<HTMLDivElement>) =>
    e.preventDefault();
  const handleOnIssueDrop = () => {
    if (!isDebounced) {
      setDraggedEnd(issueState);
      setIsDebounced(true);
    }
  };
  return (
    <IssueBoard onDragOver={handleOnDragOver} onDrop={handleOnIssueDrop}>
      <KanbanHeader>{issueState}</KanbanHeader>
      {issueArray.map((issue) => (
        <IssueComponent
          key={issue.id}
          issue={issue}
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
