/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { defineIssueLists } from "../app/kanbanSlice";
import { IssueKanban, ModalBackground } from "../styles/styles";
import { getIssuesInLocalStorage } from "../utils/storage";
import {
  InterfaceIssue,
  InterfaceIssueLists,
  IssueStateEnum,
} from "../utils/types";
import IssueBoardComponent from "./issues/IssueBoardComponent";
import ModalComponent from "./modal/ModalComponent";

let targetIssue: InterfaceIssue | undefined;

function ShowIssuesComponent() {
  const dispatch = useDispatch();
  const issues = useSelector(
    ({ kanban }: { kanban: InterfaceIssueLists }) => kanban,
  );
  const [targetIssueId, setTargetIssueId] = useState(-1);
  const [isFetchingIssues, setIsFetchingIssues] = useState(true);
  const pickTargetIssue = useCallback((issue: InterfaceIssue) => {
    if (issue.id) setTargetIssueId(issue.id);
    targetIssue = issue;
  }, []);
  const hideModal = () => {
    setTargetIssueId(-1);
    targetIssue = undefined;
  };
  useEffect(() => {
    (async () => {
      try {
        const fetchedIssueLists = await getIssuesInLocalStorage();
        if (fetchedIssueLists) dispatch(defineIssueLists(fetchedIssueLists));
      } catch (e) {
        const error = e as Error;
        toast.error(error.message);
      }
      setIsFetchingIssues(false);
    })();
  }, [dispatch]);
  return (
    <>
      {!isFetchingIssues ? (
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
      ) : (
        <div>fetching issues...</div>
      )}
      {targetIssue && targetIssueId !== -1 && (
        <ModalBackground onClick={hideModal}>
          <ModalComponent targetIssue={targetIssue} hideModal={hideModal} />
        </ModalBackground>
      )}
    </>
  );
}

export default ShowIssuesComponent;
