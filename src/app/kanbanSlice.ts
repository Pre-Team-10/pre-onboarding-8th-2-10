import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<InterfaceIssue> = [];

export const counterSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    foo: (kanbans) => {
      console.log(kanbans);
    },
  },
});

/* 임시로 reducers 함수에 foo 작성. 여기에 전역 상태 다루는 함수 작성하시면 됩니다. */

export const { foo } = counterSlice.actions;

export default counterSlice.reducer;

interface InterfaceIssue {
  id: number;
  content: string;
  due: string;
  state: IssueState;
  manager: string;
}

enum IssueState {
  todo = "todo",
  doing = "doing",
  done = "done",
}
