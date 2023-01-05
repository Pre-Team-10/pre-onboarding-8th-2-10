import React from "react";
import SaveIssuesComponent from "../components/SaveIssuesComponent";
import ShowIssuesComponent from "../components/ShowIssuesComponent";

function IssuesPage() {
  return (
    <div>
      <SaveIssuesComponent targetIssue={undefined} hideModal={undefined} />
      <hr />
      <ShowIssuesComponent />
    </div>
  );
}

export default IssuesPage;
