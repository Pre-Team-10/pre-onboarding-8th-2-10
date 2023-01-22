import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IssueStateEnum } from "../utils/types";

interface IDraggedIssue {
  startFrom: IssueStateEnum;
  startIssueId: number;
  endTo?: IssueStateEnum;
  endIssueId?: number;
  isUpperThanTargetIssue: boolean;
}

const draggedIssue: IDraggedIssue = {
  startFrom: IssueStateEnum.todo,
  startIssueId: 0,
  isUpperThanTargetIssue: false,
};

const useIssueDrag = () => {
  const dispatch = useDispatch();
  const setDraggedStart = (startFrom: IssueStateEnum, startIssueId: number) => {
    draggedIssue.startFrom = startFrom;
    draggedIssue.startIssueId = startIssueId;
  };
  const setDraggedOverId = (
    endIssueId: number,
    isUpperThanTargetIssue: boolean,
  ) => {
    draggedIssue.endIssueId = endIssueId;
    draggedIssue.isUpperThanTargetIssue = isUpperThanTargetIssue;
  };
  const setDraggedEnd = (endTo: IssueStateEnum) => {
    draggedIssue.endTo = endTo;
    if (!draggedIssue.endIssueId || !draggedIssue.endTo) return;
    if (draggedIssue.startIssueId === draggedIssue.endIssueId) return;
    console.log(draggedIssue);
  };
  return { draggedIssue, setDraggedStart, setDraggedOverId, setDraggedEnd };
};

export default useIssueDrag;
