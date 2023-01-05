/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  ItemBox,
  Item,
  BookIcon,
  PlusIcon,
} from "./styled";
import { RootState } from "../app/store";
import PlusModal from "../components/PlusModal";
import IssueOpenModal from "../components/IssueModal/IssueOpenModal";

function MainPage() {
  const [modal, setModal] = useState<boolean>(false);
  const [issueModal, setIssueModal] = useState<boolean>(false);

  const myIssue = useSelector((state: RootState) => state.issueInformation);

  const AllIssue = myIssue.issue;

  return (
    <Container>
      <PlusModal modal={modal} setModal={setModal} />
      <IssueOpenModal issueModal={issueModal} setIssueModal={setIssueModal} />
      <PlusIcon
        onClick={() => {
          setModal(true);
        }}
      />
      <Wrapper>
        <ItemBox>
          <h2>To do</h2>
          <Item>
            <p>asd</p>
          </Item>
        </ItemBox>

        <ItemBox>
          <h2>Doing</h2>
          {AllIssue.map((param) => {
            return (
              <Item>
                <p>{param.title}</p>
                <BookIcon
                  // param={param}
                  onClick={() => {
                    setIssueModal(true);
                  }}
                />
              </Item>
            );
          })}
        </ItemBox>
        <ItemBox>
          <h2>Done</h2>
        </ItemBox>
      </Wrapper>
    </Container>
  );
}

export default MainPage;
