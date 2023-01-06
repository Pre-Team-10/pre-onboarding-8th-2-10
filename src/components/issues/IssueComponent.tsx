import React from "react";
import {
  KanbanBlock,
  KanbanTitle,
  KanbanContent,
  KanbanManagerWrapper,
  KanbanBlockFooter,
  KanbanModifyButton,
} from "../../styles/styles";
import { InterfaceIssue } from "../../utils/types";
import { duplicatePrevent } from "../../utils/duplicationPrevent";

function IssueComponent({
  issue,
  handleOnDeleteButtonClick,
  handleOnModifyButtonClick,
  handleOnOpenButtonClick,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
  handleOnOpenButtonClick: (id?: number) => void;
}) {
  const preventDuplicate = duplicatePrevent();
  return (
    <KanbanBlock onClick={() => handleOnOpenButtonClick(issue.id)}>
      <KanbanTitle>{issue.title}</KanbanTitle>
      <KanbanContent>{issue.content}</KanbanContent>
      <KanbanManagerWrapper>
        {issue.manager} {issue.dueDate}
      </KanbanManagerWrapper>
      <KanbanBlockFooter>
        <KanbanModifyButton
          type="button"
          onClick={() =>
            preventDuplicate(() => handleOnModifyButtonClick(issue.id))
          }
        >
          modify
        </KanbanModifyButton>
        <KanbanModifyButton
          type="button"
          onClick={() =>
            preventDuplicate(() => handleOnDeleteButtonClick(issue.id))
          }
        >
          delete
        </KanbanModifyButton>
      </KanbanBlockFooter>
    </KanbanBlock>
  );
}

export default IssueComponent;
