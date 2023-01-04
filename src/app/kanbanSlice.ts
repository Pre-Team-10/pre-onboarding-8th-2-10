import { createSlice } from "@reduxjs/toolkit";
import EMPTY_KANBAN_ISSUE_LISTS from "../constants/kanban";
import {
  getIssuesInLocalStorage,
  saveUpdatedIssuesInLocalStorage,
} from "../utils/storage";
import {
  InterfaceIssue,
  InterfaceIssueLists,
  IssueStateEnum,
} from "../utils/types";

const initialState: InterfaceIssueLists =
  getIssuesInLocalStorage() || EMPTY_KANBAN_ISSUE_LISTS;

let maxIssueId =
  Math.max(
    ...Object.keys(initialState).map((issueState) => {
      return initialState[issueState as IssueStateEnum].reduce(
        (bigIssueId, issue) => {
          if (issue.id === undefined) return bigIssueId;
          return bigIssueId > issue.id ? bigIssueId : issue.id;
        },
        0,
      );
    }),
  ) + 1;

export const counterSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addIssue: (kanbans, { payload: newIssue }: { payload: InterfaceIssue }) => {
      const newIssueState = newIssue.state;
      const newIssueWithId = { ...newIssue, id: maxIssueId };
      kanbans[newIssueState].push(newIssueWithId);
      saveUpdatedIssuesInLocalStorage(kanbans);
      maxIssueId += 1;
    },
    deleteIssue: (
      kanbans,
      {
        payload: { targetId, targetState },
      }: { payload: { targetId: number; targetState: IssueStateEnum } },
    ) => {
      kanbans[targetState] = kanbans[targetState].filter(
        (issue) => issue.id !== targetId,
      );
      saveUpdatedIssuesInLocalStorage(kanbans);
    },
    modifyIssue: (
      kanbans,
      { payload: modifiedIssue }: { payload: InterfaceIssue },
    ) => {
      const issueState = modifiedIssue.state;
      const prevIssueState = modifiedIssue.prevState;
      if (issueState !== prevIssueState) {
        if (prevIssueState)
          kanbans[prevIssueState] = kanbans[prevIssueState].filter(
            (issue) => issue.id !== modifiedIssue.id,
          );
        kanbans[issueState].push(modifiedIssue);
      } else {
        const targetIssueIndex = kanbans[issueState].findIndex(
          (issue) => issue.id === modifiedIssue.id,
        );
        kanbans[issueState].splice(targetIssueIndex, 1, modifiedIssue);
      }
      saveUpdatedIssuesInLocalStorage(kanbans);
    },
  },
});

export const { addIssue, deleteIssue, modifyIssue } = counterSlice.actions;

export default counterSlice.reducer;
