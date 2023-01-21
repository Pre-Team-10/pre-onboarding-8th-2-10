import MANAGERS from "../constants/managers";
import { InterfaceIssueLists, IssueStateEnum } from "./types";

const dateTimeLocalRegex = /^(\d{4,})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})?$/;

export const filterUnverifiedAndDuplicatedIssues = (
  issueLists: InterfaceIssueLists,
) => {
  Object.keys(issueLists).forEach((issueState) => {
    const idSet = new Set();
    issueLists[issueState as IssueStateEnum].forEach(
      (issue, index, issueArray) => {
        const issueId = issue.id;
        if (issueId && !idSet.has(issueId)) idSet.add(issueId);
        else {
          issueArray.splice(index, 1);
          return;
        }
        if (
          !("id" in issue) ||
          !("title" in issue) ||
          !("content" in issue) ||
          !("dueDate" in issue) ||
          !("manager" in issue) ||
          !Object.values(MANAGERS).includes(issue.manager) ||
          !Object.values(IssueStateEnum).includes(issue.state) ||
          typeof issue.id !== "number" ||
          !dateTimeLocalRegex.test(issue.dueDate)
        ) {
          issueArray.splice(index, 1);
        }
      },
    );
  });
};

export const getIssuesMaxId = (issueLists: InterfaceIssueLists) => {
  return (
    Math.max(
      ...Object.keys(issueLists).map((issueState) => {
        return issueLists[issueState as IssueStateEnum].reduce(
          (bigIssueId, issue) => {
            if (issue.id === undefined) return bigIssueId;
            return bigIssueId > issue.id ? bigIssueId : issue.id;
          },
          0,
        );
      }),
    ) + 1
  );
};

export const checkIfValisManagerName = (manager: string | undefined) => {
  return manager && Object.keys(MANAGERS).includes(manager);
};
