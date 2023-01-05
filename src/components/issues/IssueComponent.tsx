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

function IssueComponent({
  issue,
  handleOnDeleteButtonClick,
  handleOnModifyButtonClick,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
}) {
  // console.log("rerendered.");
  return (
    <KanbanBlock>
      <KanbanTitle>{issue.title}</KanbanTitle>
      <KanbanContent>{issue.content}</KanbanContent>
      <KanbanManagerWrapper>
        {issue.manager} {issue.dueDate}
      </KanbanManagerWrapper>
      <KanbanBlockFooter>
        <KanbanModifyButton
          type="button"
          onClick={() => handleOnModifyButtonClick(issue.id)}
        >
          modify
        </KanbanModifyButton>
        <button
          type="button"
          onClick={() => handleOnDeleteButtonClick(issue.id)}
        >
          delete
        </button>
      </KanbanBlockFooter>
    </KanbanBlock>
  );
}

export default IssueComponent;
