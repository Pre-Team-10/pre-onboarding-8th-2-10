import React, { useEffect, useState } from "react";
import useIssueDrag from "../../hooks/useIssueDrag";
import {
  KanbanBlock,
  KanbanTitle,
  KanbanContent,
  KanbanManagerWrapper,
  KanbanBlockFooter,
  KanbanModifyButton,
  KanbanInner,
} from "../../styles/styles";
import { InterfaceIssue } from "../../utils/types";

let isUpperIssue = false;

function IssueComponent({
  issue,
  handleOnDeleteButtonClick,
  handleOnModifyButtonClick,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
}) {
  const { draggedIssue, setDraggedStart, setDraggedOverId } = useIssueDrag();
  const [isDraggedEnter, setIsDraggedEnter] = useState(false);
  const { id, title, content, dueDate, manager, state } = issue;
  const handleOnDragStart = () => id && setDraggedStart(state, id);
  const handleOnDragEnter = (isUpperThanTargetIssue: boolean) => {
    if (id) setDraggedOverId(id, isUpperThanTargetIssue);
    setIsDraggedEnter(true);
    isUpperIssue = isUpperThanTargetIssue;
  };
  const handleOnDragExitCapture = () => setIsDraggedEnter(false);
  useEffect(() => {
    if (isDraggedEnter) {
      setTimeout(() => {
        handleOnDragExitCapture();
        isUpperIssue = false;
      }, 800);
    }
  }, [isDraggedEnter]);
  return (
    <KanbanBlock draggable onDragStart={handleOnDragStart}>
      <KanbanInner
        onDragEnter={() => handleOnDragEnter(true)}
        onDragExitCapture={handleOnDragExitCapture}
        isMouseOver={
          id !== draggedIssue.startIssueId && isUpperIssue && isDraggedEnter
        }
        isUpperIssue={isUpperIssue}
      >
        <KanbanTitle>
          {title.length < 25 ? title : `${title.slice(0, 25)}...`}
        </KanbanTitle>
        <KanbanContent>
          {content.length < 30 ? content : `${content.slice(0, 30)}...`}
        </KanbanContent>
      </KanbanInner>
      <KanbanInner
        onDragEnter={() => handleOnDragEnter(false)}
        onDragExitCapture={handleOnDragExitCapture}
        isMouseOver={
          id !== draggedIssue.startIssueId && !isUpperIssue && isDraggedEnter
        }
        isUpperIssue={isUpperIssue}
      >
        <KanbanManagerWrapper>
          {manager} {dueDate}
        </KanbanManagerWrapper>
        <KanbanBlockFooter>
          <KanbanModifyButton
            type="button"
            onClick={() => handleOnModifyButtonClick(id)}
          >
            modify
          </KanbanModifyButton>
          <KanbanModifyButton
            type="button"
            onClick={() => handleOnDeleteButtonClick(issue.id)}
          >
            delete
          </KanbanModifyButton>
        </KanbanBlockFooter>
      </KanbanInner>
    </KanbanBlock>
  );
}

export default IssueComponent;
