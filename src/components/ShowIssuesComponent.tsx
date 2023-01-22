import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { defineIssueLists } from "../redux/kanbanSlice";
import useAddIssueModal from "../hooks/useAddIssueModal";
import { IssueKanban, ModalBackground } from "../styles/styles";
import { getIssuesInLocalStorage } from "../utils/storage";
import {
  InterfaceIssue,
  InterfaceIssueLists,
  IssueStateEnum,
} from "../utils/types";
import IssueBoardComponent from "./issues/IssueBoardComponent";
import ModalComponent from "./modal/ModalComponent";
import SaveIssuesComponent from "./SaveIssuesComponent";

let targetIssue: InterfaceIssue | undefined;
let debounceTimeout: NodeJS.Timeout;

function ShowIssuesComponent() {
  const dispatch = useDispatch();
  const {
    targetIssue: clickedState,
    isModalOpened,
    toggleModal,
  } = useAddIssueModal();
  const issues = useSelector(
    ({ kanban }: { kanban: InterfaceIssueLists }) => kanban,
  );
  const [isFetchingIssues, setIsFetchingIssues] = useState(true);
  const [isDebounced, setIsDebounced] = useState(false);
  const pickTargetIssue = useCallback(
    (issue: InterfaceIssue) => {
      if (issue.id) targetIssue = issue;
      toggleModal();
    },
    [toggleModal],
  );
  const hideModal = () => {
    targetIssue = undefined;
    toggleModal();
  };
  useEffect(() => {
    if (isDebounced) {
      debounceTimeout = setTimeout(() => {
        setIsDebounced(false);
      }, 500);
    }
    return () => clearTimeout(debounceTimeout);
  }, [isDebounced]);
  useEffect(() => {
    (() => {
      getIssuesInLocalStorage()
        .then((fetchedIssueLists) => {
          if (fetchedIssueLists) dispatch(defineIssueLists(fetchedIssueLists));
        })
        .then(() => {
          setIsFetchingIssues(false);
        })
        .catch((e) => {
          const error = e as Error;
          toast.error(error.message);
        });
    })();
  }, [dispatch]);
  return (
    <>
      <IssueKanban>
        {!isFetchingIssues ? (
          Object.keys(issues).map((issueState) => {
            const state = issueState as IssueStateEnum;
            return (
              <IssueBoardComponent
                key={issueState}
                issueState={state}
                issueArray={issues[state]}
                isDebounced={isDebounced}
                pickTargetIssue={pickTargetIssue}
                toggleModal={() => toggleModal(state)}
                setIsDebounced={setIsDebounced}
              />
            );
          })
        ) : (
          <div>Fetching issues...</div>
        )}
      </IssueKanban>
      {isModalOpened && (
        <ModalBackground onClick={hideModal}>
          <ModalComponent>
            <SaveIssuesComponent
              clickedState={clickedState}
              targetIssue={targetIssue}
              hideModal={hideModal}
            />
          </ModalComponent>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowIssuesComponent;
