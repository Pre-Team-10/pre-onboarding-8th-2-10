/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React from "react";

import { BackModal, WhiteModal } from "./styled";

type ModalType = {
  issueModal: boolean;
  setIssueModal: Function;
};

function IssueOpenModal(props: ModalType) {
  return (
    <BackModal issueModal={props.issueModal}>
      <WhiteModal>
        <p>s</p>
      </WhiteModal>
    </BackModal>
  );
}
export default IssueOpenModal;
