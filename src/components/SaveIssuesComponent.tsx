import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addIssue, modifyIssue } from "../app/kanbanSlice";
import MANAGERS from "../constants/managers";
import {
  InputBlock,
  ModalFormTitle,
  ModalTitle,
  ModalInput,
  ModalTextarea,
  ModalSelect,
  KanbanModifyButton,
} from "../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../utils/types";
import { checkIfValisManagerName } from "../utils/utils";
import ManagerSearchComponent from "./issues/ManagerSearchComponent";

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
    <form onSubmit={handleOnIssueFormSubmit}>
      <ModalFormTitle>memo your issues!</ModalFormTitle>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || title)}>
        <ModalTitle>title</ModalTitle>
        <ModalInput
          placeholder="Please enter a title"
          ref={titleInputRef}
          defaultValue={targetIssue && targetIssue.title}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || content)}>
        <ModalTitle>content</ModalTitle>
        <ModalTextarea
          placeholder="Please enter a content"
          ref={contentInputRef}
          defaultValue={targetIssue && targetIssue.content}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || dueDate)}>
        <ModalTitle>due date</ModalTitle>
        <ModalInput
          type="datetime-local"
          ref={dueDateInputRef}
          defaultValue={targetIssue && targetIssue.dueDate}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || isValidManagerName)}>
        <ModalTitle>manager</ModalTitle>
        <ManagerSearchComponent
          managerInputRef={managerInputRef}
          defaultValue={targetIssue?.manager}
        />
      </InputBlock>
      <InputBlock isEntered>
        <ModalTitle>state</ModalTitle>
        <ModalSelect
          ref={stateSelectRef}
          defaultValue={targetIssue ? targetIssue.state : IssueStateEnum.todo}
        >
          {Object.keys(IssueStateEnum).map((state) => (
            <option key={state}>{state}</option>
          ))}
        </ModalSelect>
      </InputBlock>
      <br />
      <div>
        <KanbanModifyButton type="submit">save</KanbanModifyButton>
      </div>
    </form>
  );
}

export default SaveIssuesComponent;
