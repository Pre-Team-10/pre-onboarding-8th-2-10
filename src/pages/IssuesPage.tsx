import React from "react";
import CreateIssuesComponent from "../components/CreateIssuesComponent";
import ShowIssuesComponent from "../components/ShowIssuesComponent";

function IssuesPage() {
  return (
    <div>
      <CreateIssuesComponent targetIssue={undefined} hideModal={undefined} />
      <hr />
      <ShowIssuesComponent />
    </div>
  );
}

export default IssuesPage;
