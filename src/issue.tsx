/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from "@reduxjs/toolkit";

export const issue = createSlice({
  name: "issue",
  initialState: {
    title: "test",
    content: "test",
    deadline: "test",
    manager: "test",
    issueStatus: "test",
  },
  reducers: {
    testtt(state) {
      state.title = "김도완";
      //   state.content = action.payload.제목;
      //   state.deadline = action.payload.제목;
      //   state.manager = action.payload.제목;
      //   state.issueStatus = action.payload.제목;
    },
  },
});

export const { testtt } = issue.actions;

export default issue.reducer;
