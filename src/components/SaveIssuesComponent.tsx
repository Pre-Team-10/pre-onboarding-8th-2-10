import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addIssue, modifyIssue } from "../app/kanbanSlice";
import MANAGERS from "../constants/managers";
import { InterfaceIssue, IssueStateEnum } from "../utils/types";
import { checkIfValisManagerName } from "../utils/utils";
import ManagerSearchComponent from "./issues/ManagerSearchComponent";
import * as S from "./styled-saveIssues";

type Tinput = string | undefined;

let title: Tinput = "";
let content: Tinput = "";
let dueDate: Tinput = "";
let manager: Tinput = "";

function SaveIssuesComponent({
  targetIssue,
  hideModal,
}: {
  targetIssue: InterfaceIssue | undefined;
  hideModal: (() => void) | undefined;
}) {
  const dispatch = useDispatch();
  const [submitCount, setSubmitCount] = useState(0);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const dueDateInputRef = useRef<HTMLInputElement>(null);
  const managerInputRef = useRef<HTMLInputElement>(null);
  const stateSelectRef = useRef<HTMLSelectElement>(null);
  const initiateAllInputValue = () => {
    if (titleInputRef.current) titleInputRef.current.value = "";
    if (contentInputRef.current) contentInputRef.current.value = "";
    if (dueDateInputRef.current) dueDateInputRef.current.value = "";
    if (managerInputRef.current) managerInputRef.current.value = "";
    if (stateSelectRef.current)
      stateSelectRef.current.value = IssueStateEnum.todo;
  };

  let isValidManagerName = checkIfValisManagerName(manager);

  const handleOnIssueFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitCount(submitCount + 1);

    title = titleInputRef.current?.value;
    content = contentInputRef.current?.value;
    dueDate = dueDateInputRef.current?.value;
    manager = managerInputRef.current?.value;
    isValidManagerName = checkIfValisManagerName(manager);

    if (title && content && dueDate && manager && isValidManagerName) {
      const state = stateSelectRef.current?.value as IssueStateEnum;

      if (
        !Object.keys(MANAGERS).includes(manager) ||
        !Object.keys(IssueStateEnum).includes(state)
      ) {
        toast.error("Invalid selected options.");
        return;
      }

      const newIssue = { title, content, dueDate, manager, state };

      if (!targetIssue) {
        dispatch(addIssue(newIssue));
        initiateAllInputValue();
      } else {
        dispatch(
          modifyIssue({
            ...newIssue,
            id: targetIssue.id,
            prevState: targetIssue.state,
          }),
        );

        if (hideModal) hideModal();
      }
    }
  };

  const isSubmitCountEqualsZero = submitCount === 0;

  return (
    <S.Wrapper>
      <S.SaveIssues onSubmit={handleOnIssueFormSubmit}>
        <S.Title>Memo your issues!</S.Title>
        <S.InputBlock isEntered={!!(isSubmitCountEqualsZero || title)}>
          <S.TitleH5>Title</S.TitleH5>
          <S.Input
            ref={titleInputRef}
            defaultValue={targetIssue && targetIssue.title}
          />
        </S.InputBlock>
        <S.InputBlock isEntered={!!(isSubmitCountEqualsZero || content)}>
          <S.TitleH5>Content</S.TitleH5>
          <S.Textarea
            ref={contentInputRef}
            defaultValue={targetIssue && targetIssue.content}
          />
        </S.InputBlock>
        <S.InputBlock isEntered={!!(isSubmitCountEqualsZero || dueDate)}>
          <S.TitleH5>Due date</S.TitleH5>
          <S.Input
            type="datetime-local"
            ref={dueDateInputRef}
            defaultValue={targetIssue && targetIssue.dueDate}
          />
        </S.InputBlock>
        <S.InputBlock
          isEntered={!!(isSubmitCountEqualsZero || isValidManagerName)}
        >
          <S.TitleH5>Manager</S.TitleH5>
          <ManagerSearchComponent
            managerInputRef={managerInputRef}
            defaultValue={targetIssue?.manager}
          />
        </S.InputBlock>
        <S.InputBlock isEntered>
          <S.TitleH5>State</S.TitleH5>
          <S.Select
            ref={stateSelectRef}
            defaultValue={targetIssue ? targetIssue.state : IssueStateEnum.todo}
          >
            {Object.keys(IssueStateEnum).map((state) => (
              <option key={state}>{state}</option>
            ))}
          </S.Select>
        </S.InputBlock>
        <br />
        <S.BtnWrap>
          <S.SaveBtn type="submit">Save</S.SaveBtn>
        </S.BtnWrap>
      </S.SaveIssues>
    </S.Wrapper>
  );
}

export default SaveIssuesComponent;
