export interface InterfaceIssueLists {
  todo: Array<InterfaceIssue>;
  doing: Array<InterfaceIssue>;
  done: Array<InterfaceIssue>;
}

export interface InterfaceIssue {
  id?: number;
  title: string;
  content: string;
  dueDate: string;
  manager: string;
  state: IssueStateEnum;
  prevState?: IssueStateEnum;
}

export enum IssueStateEnum {
  todo = "todo",
  doing = "doing",
  done = "done",
}
