import React from "react";
import { KanbanBlock, KanbanBlockFooter } from "../../styles/styles";
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
      <h5>{issue.title}</h5>
      <p>{issue.content}</p>
      <div>
        {issue.manager} {issue.dueDate}
      </div>
      <KanbanBlockFooter>
        <button
          type="button"
          onClick={() => handleOnModifyButtonClick(issue.id)}
        >
          modify
        </button>
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
