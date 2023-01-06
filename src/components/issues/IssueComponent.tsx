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
import { getThrottlingEater } from "../../utils/throttling";

function IssueComponent({
  issue,
  handleOnDeleteButtonClick,
  handleOnModifyButtonClick,
}: {
  issue: InterfaceIssue;
  handleOnDeleteButtonClick: (id?: number) => void;
  handleOnModifyButtonClick: (id?: number) => void;
}) {
  const { id, title, content, dueDate, manager } = issue;
  const preventClickThrottling = getThrottlingEater();
  return (
    <KanbanBlock>
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
          onClick={() =>
            preventClickThrottling(() => handleOnModifyButtonClick(id))
          }
        >
          modify
        </KanbanModifyButton>
        <KanbanModifyButton
          type="button"
          onClick={() =>
            preventClickThrottling(() => handleOnDeleteButtonClick(issue.id))
          }
        >
          delete
        </KanbanModifyButton>
      </KanbanBlockFooter>
    </KanbanBlock>
  );
}

export default IssueComponent;
