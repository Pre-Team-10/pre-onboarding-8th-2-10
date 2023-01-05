import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import IssuesPage from "./pages/IssuesPage";

function App() {
  return (
    <div className="App">
      <ToastContainer pauseOnHover={false} />
      <GlobalStyle />
      <IssuesPage />
    </div>
  );
}

export default App;
