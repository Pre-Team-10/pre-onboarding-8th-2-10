import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IssuesPage from "./pages/IssuesPage";

function App() {
  return (
    <div className="App">
      <ToastContainer pauseOnHover={false} />
      <IssuesPage />
    </div>
  );
}

export default App;
