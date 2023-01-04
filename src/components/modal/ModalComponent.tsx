import React from "react";
import { Modal } from "../../styles/styles";
import { InterfaceIssue } from "../../utils/types";
import CreateIssuesComponent from "../CreateIssuesComponent";

function ModalComponent({
  targetIssue,
  hideModal,
}: {
  targetIssue: InterfaceIssue | undefined;
  hideModal: (() => void) | undefined;
}) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();
  return (
    <Modal onClick={stopPropagation}>
      <CreateIssuesComponent targetIssue={targetIssue} hideModal={hideModal} />
    </Modal>
  );
}

export default ModalComponent;
