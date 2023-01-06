import React from "react";
import SaveIssuesComponent from "../components/SaveIssuesComponent";
import ShowIssuesComponent from "../components/ShowIssuesComponent";
import { MainTitle } from "../styles/styles";

function IssuesPage() {
  return (
    <div>
      <MainTitle>Issue Board</MainTitle>
      <ShowIssuesComponent />
      <SaveIssuesComponent targetIssue={undefined} hideModal={undefined} />
      {/* <Loading>Loading...</Loading> */}
    </div>
  );
}

export default IssuesPage;
