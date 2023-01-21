import { useCallback, useState } from "react";
import { IssueStateEnum } from "../utils/types";

const useAddIssueModal = () => {
  const [targetIssue, setTargetIssue] = useState(IssueStateEnum.todo);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const toggleModal = useCallback(
    (issueState?: IssueStateEnum) => {
      setTargetIssue(issueState || IssueStateEnum.todo);
      setIsModalOpened((prevState) => !prevState);
    },
    [setIsModalOpened],
  );
  return { targetIssue, isModalOpened, toggleModal };
};

export default useAddIssueModal;
