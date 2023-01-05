import React from "react";
import SaveIssuesComponent from "../components/SaveIssuesComponent";
import ShowIssuesComponent from "../components/ShowIssuesComponent";

function IssuesPage() {
  return (
    <div>
      {/* <SaveIssuesComponent targetIssue={undefined} hideModal={undefined} /> */}
      {/* <hr /> */}
      <h1>Issue Board</h1>
      <ShowIssuesComponent />
    </div>
  );
}

export default IssuesPage;
