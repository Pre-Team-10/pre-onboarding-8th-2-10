import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { arrangeDroppedIssue } from "../redux/kanbanSlice";
import { IDraggedIssue, IssueStateEnum } from "../utils/types";

const draggedIssue: IDraggedIssue = {
  startFrom: IssueStateEnum.todo,
  startIssueId: 0,
  isUpperThanTargetIssue: false,
};

const useIssueDrag = () => {
  const dispatch = useDispatch();
  const setDraggedStart = useCallback(
    (startFrom: IssueStateEnum, startIssueId: number) => {
      draggedIssue.startFrom = startFrom;
      draggedIssue.startIssueId = startIssueId;
    },
    [],
  );
  const setDraggedOverId = useCallback(
    (endIssueId: number, isUpperThanTargetIssue: boolean) => {
      draggedIssue.endIssueId = endIssueId;
      draggedIssue.isUpperThanTargetIssue = isUpperThanTargetIssue;
    },
    [],
  );
  const setDraggedEnd = useCallback(
    (endTo: IssueStateEnum) => {
      draggedIssue.endTo = endTo;
      if (!draggedIssue.endTo) return;
      dispatch(arrangeDroppedIssue(draggedIssue));
    },
    [dispatch],
  );
  return { draggedIssue, setDraggedStart, setDraggedOverId, setDraggedEnd };
};

export default useIssueDrag;
