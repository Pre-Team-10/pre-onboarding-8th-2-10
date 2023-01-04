import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addIssue, modifyIssue } from "../app/kanbanSlice";
import MANAGERS from "../constants/managers";
import { InputBlock } from "../styles/styles";
import { InterfaceIssue, IssueStateEnum } from "../utils/types";

type Tinput = string | undefined;

let title: Tinput = "";
let content: Tinput = "";
let dueDate: Tinput = "";
let manager: Tinput = "";
const HYPHEN = "-";

function CreateIssuesComponent({
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
  const managerSelectRef = useRef<HTMLSelectElement>(null);
  const stateSelectRef = useRef<HTMLSelectElement>(null);
  const initiateAllInputValue = () => {
    if (titleInputRef.current) titleInputRef.current.value = "";
    if (contentInputRef.current) contentInputRef.current.value = "";
    if (dueDateInputRef.current) dueDateInputRef.current.value = "";
    if (managerSelectRef.current) managerSelectRef.current.value = HYPHEN;
    if (stateSelectRef.current)
      stateSelectRef.current.value = IssueStateEnum.todo;
  };
  const handleOnIssueFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitCount(submitCount + 1);
    title = titleInputRef.current?.value;
    content = contentInputRef.current?.value;
    dueDate = dueDateInputRef.current?.value;
    manager = managerSelectRef.current?.value;
    if (title && content && dueDate && manager && manager !== HYPHEN) {
      const state = stateSelectRef.current?.value as IssueStateEnum;
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
      <h4>memo your issues!</h4>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || title)}>
        <h5>title</h5>
        <input
          ref={titleInputRef}
          defaultValue={targetIssue && targetIssue.title}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || content)}>
        <h5>content</h5>
        <textarea
          ref={contentInputRef}
          defaultValue={targetIssue && targetIssue.content}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || dueDate)}>
        <h5>due date</h5>
        <input
          type="datetime-local"
          ref={dueDateInputRef}
          defaultValue={targetIssue && targetIssue.dueDate}
        />
      </InputBlock>
      <InputBlock isEntered={!!(isSubmitCountEqualsZero || manager !== HYPHEN)}>
        <h5>manager</h5>
        <select
          ref={managerSelectRef}
          defaultValue={targetIssue && targetIssue.manager}
        >
          <option defaultChecked>-</option>
          {Object.keys(MANAGERS).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </InputBlock>
      <InputBlock isEntered>
        <h5>state</h5>
        <select
          ref={stateSelectRef}
          defaultValue={targetIssue && targetIssue.state}
        >
          <option defaultChecked>todo</option>
          <option>doing</option>
          <option>done</option>
        </select>
      </InputBlock>
      <br />
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
}

export default CreateIssuesComponent;
