import React from "react";
import SaveIssuesComponent from "../components/SaveIssuesComponent";
import ShowIssuesComponent from "../components/ShowIssuesComponent";
import * as S from "./styled-issuesPage";

function IssuesPage() {
  return (
    <S.Background>
      <SaveIssuesComponent targetIssue={undefined} hideModal={undefined} />
      <ShowIssuesComponent />
    </S.Background>
  );
}

export default IssuesPage;
