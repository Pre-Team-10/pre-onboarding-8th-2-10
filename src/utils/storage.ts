import { InterfaceIssueLists } from "./types";

const KEY = "KANBAN_ISSUES";

export const getIssuesInLocalStorage = () => {
  let storagedIssue: InterfaceIssueLists | null = null;
  const stringifiedIssues = localStorage.getItem(KEY);
  if (stringifiedIssues) {
    storagedIssue = JSON.parse(stringifiedIssues) as InterfaceIssueLists;
  }
  return storagedIssue;
};

export const saveUpdatedIssuesInLocalStorage = (
  issueLists: InterfaceIssueLists,
) => {
  localStorage.setItem(KEY, JSON.stringify(issueLists));
};
