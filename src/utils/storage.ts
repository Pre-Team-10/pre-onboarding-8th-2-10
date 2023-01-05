import { InterfaceIssueLists } from "./types";
import { filterUnverifiedAndDuplicatedIssues } from "./utils";

const KANBAN_ISSUES_KEY = "KANBAN_ISSUES";

export const saveUpdatedIssuesInLocalStorage = (
  issueLists: InterfaceIssueLists,
) => {
  localStorage.setItem(KANBAN_ISSUES_KEY, JSON.stringify(issueLists));
};

const deleteIssuesInLocalStorage = () => {
  localStorage.removeItem(KANBAN_ISSUES_KEY);
};

export const getIssuesInLocalStorage = () => {
  return new Promise<InterfaceIssueLists | null>(
    (fetchIssuesSuccess, fetchIssuesfail) => {
      let storagedIssues: InterfaceIssueLists | null;
      try {
        const stringifiedIssues = localStorage.getItem(KANBAN_ISSUES_KEY);
        if (stringifiedIssues) {
          storagedIssues = JSON.parse(stringifiedIssues) as InterfaceIssueLists;
          filterUnverifiedAndDuplicatedIssues(storagedIssues);
          saveUpdatedIssuesInLocalStorage(storagedIssues);
        } else storagedIssues = null;
        fetchIssuesSuccess(storagedIssues);
      } catch (e) {
        deleteIssuesInLocalStorage();
        fetchIssuesfail(new Error("Failed to fetch issues!"));
      }
    },
  );
};
