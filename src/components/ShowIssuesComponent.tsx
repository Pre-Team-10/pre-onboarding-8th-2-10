import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { IssueKanban, ModalBackground } from "../styles/styles";
import {
  InterfaceIssue,
  InterfaceIssueLists,
  IssueStateEnum,
} from "../utils/types";
import IssueBoardComponent from "./issues/IssueBoardComponent";
import ModalComponent from "./modal/ModalComponent";

let targetIssue: InterfaceIssue | undefined;

function ShowIssuesComponent() {
  const issues = useSelector(
    ({ kanban }: { kanban: InterfaceIssueLists }) => kanban,
  );
  const [targetIssueId, setTargetIssueId] = useState(-1);
  const pickTargetIssue = useCallback((issue: InterfaceIssue) => {
    if (issue.id) setTargetIssueId(issue.id);
    targetIssue = issue;
  }, []);
  const hideModal = () => {
    setTargetIssueId(-1);
    targetIssue = undefined;
  };
  return (
    <>
      <IssueKanban>
        {Object.keys(issues).map((issueState) => {
          const state = issueState as IssueStateEnum;
          return (
            <IssueBoardComponent
              key={issueState}
              issueState={state}
              issueArray={issues[state]}
              pickTargetIssue={pickTargetIssue}
            />
          );
        })}
      </IssueKanban>
      {targetIssue && targetIssueId !== -1 && (
        <ModalBackground onClick={hideModal}>
          <ModalComponent targetIssue={targetIssue} hideModal={hideModal} />
        </ModalBackground>
      )}
    </>
  );
}

export default ShowIssuesComponent;
