import React from "react";
import ShowIssuesComponent from "../components/ShowIssuesComponent";
import { MainTitle } from "../styles/styles";

function IssuesPage() {
  return (
    <div>
      <MainTitle>Issue Board</MainTitle>
      <ShowIssuesComponent />
    </div>
  );
}

export default IssuesPage;
