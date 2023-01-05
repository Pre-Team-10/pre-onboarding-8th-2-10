import { createSlice } from "@reduxjs/toolkit";
import EMPTY_KANBAN_ISSUE_LISTS from "../constants/kanban";
import { saveUpdatedIssuesInLocalStorage } from "../utils/storage";
import {
  InterfaceIssue,
  InterfaceIssueLists,
  IssueStateEnum,
} from "../utils/types";
import { getIssuesMaxId } from "../utils/utils";

const initialState: InterfaceIssueLists = EMPTY_KANBAN_ISSUE_LISTS;

let maxIssueId = 1;

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
    defineIssueLists: (
      kanbans,
      { payload: fetchedIssueLists }: { payload: InterfaceIssueLists },
    ) => {
      kanbans.todo = fetchedIssueLists.todo;
      kanbans.doing = fetchedIssueLists.doing;
      kanbans.done = fetchedIssueLists.done;
      maxIssueId = getIssuesMaxId(fetchedIssueLists);
    },
  },
});

export const { addIssue, deleteIssue, modifyIssue, defineIssueLists } =
  counterSlice.actions;

export default counterSlice.reducer;
