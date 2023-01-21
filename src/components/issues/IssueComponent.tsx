import React, { useEffect, useState } from "react";
import useIssueDrag from "../../hooks/useIssueDrag";
import {
  KanbanBlock,
  KanbanTitle,
  KanbanContent,
  KanbanManagerWrapper,
  KanbanBlockFooter,
  KanbanModifyButton,
} from "../../styles/styles";
import { InterfaceIssue } from "../../utils/types";

function IssueComponent({
  issue,
  handleOnDeleteButtonClick,
  handleOnModifyButtonClick,
  isFirstIndex,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
  isFirstIndex: boolean;
}) {
  const { setDraggedStart, setDraggedOverId } = useIssueDrag();
  const [isDraggedEnter, setIsDraggedEnter] = useState(false);
  const { id, title, content, dueDate, manager, state } = issue;
  const handleOnDragStart = () => id && setDraggedStart(state, id);
  const handleOnDragOver = () => {
    if (id) setDraggedOverId(id);
    setIsDraggedEnter(true);
  };
  const handleOnDragLeave = () => setIsDraggedEnter(false);
  useEffect(() => {
    if (isDraggedEnter) {
      setTimeout(() => {
        handleOnDragLeave();
      }, 800);
    }
  }, [isDraggedEnter]);
  return (
    <div>
      {isFirstIndex && (
        <div
          onDragEnter={handleOnDragOver}
          onDragLeaveCapture={handleOnDragLeave}
        >
          {isDraggedEnter ? "+" : "-"}
        </div>
      )}
      <KanbanBlock draggable onDragEndCapture={handleOnDragStart}>
        <KanbanTitle>
          {title.length < 25 ? title : `${title.slice(0, 25)}...`}
        </KanbanTitle>
        <KanbanContent>
          {content.length < 30 ? content : `${content.slice(0, 30)}...`}
        </KanbanContent>
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
      </KanbanBlock>
      <div
        onDragEnter={handleOnDragOver}
        onDragLeaveCapture={handleOnDragLeave}
      >
        {isDraggedEnter ? "+" : "-"}
      </div>
    </div>
  );
}

export default IssueComponent;
