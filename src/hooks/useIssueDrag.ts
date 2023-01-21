import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IssueStateEnum } from "../utils/types";

interface IDraggedIssue {
  startFrom: IssueStateEnum;
  startIssueId: number;
  endTo?: IssueStateEnum;
  endIssueId?: number;
}

const draggedIssue: IDraggedIssue = {
  startFrom: IssueStateEnum.todo,
  startIssueId: 0,
};

const useIssueDrag = () => {
  const dispatch = useDispatch();
  const setDraggedStart = (startFrom: IssueStateEnum, startIssueId: number) => {
    draggedIssue.startFrom = startFrom;
    draggedIssue.startIssueId = startIssueId;
  };
  const setDraggedOverId = (endIssueId: number) => {
    draggedIssue.endIssueId = endIssueId;
  };
  const setDraggedEnd = (endTo: IssueStateEnum) => {
    draggedIssue.endTo = endTo;
    if (!draggedIssue.endIssueId) return;
    if (
      draggedIssue.startFrom !== draggedIssue.endTo ||
      draggedIssue.startIssueId !== draggedIssue.endIssueId
    ) {
      console.log(draggedIssue);
    }
  };
  return { draggedIssue, setDraggedStart, setDraggedOverId, setDraggedEnd };
};

export default useIssueDrag;
