import React, { PropsWithChildren } from "react";
import { Modal } from "../../styles/styles";

function ModalComponent({ children }: PropsWithChildren) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();
  return <Modal onClick={stopPropagation}>{children}</Modal>;
}

export default ModalComponent;
