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
  handleOnOpenButtonClick,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
  handleOnOpenButtonClick: (id?: number) => void;
}) {
  // console.log("rerendered.");
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
          onClick={() => handleOnModifyButtonClick(issue.id)}
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
  );
}

export default IssueComponent;
