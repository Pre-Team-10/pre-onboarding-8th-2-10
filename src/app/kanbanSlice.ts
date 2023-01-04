/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from "@reduxjs/toolkit";

const initialState: Issue = {
  issue: [],
};
export const issueInformation = createSlice({
  name: "issueInformation",
  initialState,
  reducers: {
    addIssue: (state, action) => {
      state.issue.push(action.payload);
    },
  },
});

export const { addIssue } = issueInformation.actions;

export default issueInformation.reducer;

type Issue = {
  issue: InterfaceIssue[];
};

interface InterfaceIssue {
  id: number;
  title: string;
  content: string;
  due: string;
  state: string;
  manager: string;
}

// enum IssueState {
//   todo = "todo",
//   doing = "doing",
//   done = "done",
// }
