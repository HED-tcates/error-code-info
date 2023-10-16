import "./App.scss";
import React from "react";
import errors from "./assets/errors.json";
import { ErrorData } from "./types/error-types";
import ErrorItem from "./components/error-item/error-item";
import { Button } from "@mui/material";

function App() {
  let appErrors = errors as ErrorData[];
  let myRef: React.RefObject<any>;

  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});

  myRef = React.createRef();

  return (
    <div className="App">
      <header className="App-header">
        <div>List of Error Codes</div>
        <br />
        <Button variant="contained" onClick={executeScroll}>
          Begin ▼
        </Button>
      </header>
      <div ref={myRef} className="app-body-list-parent">
        <div className="app-body-list">
          {appErrors.map((error, i) => (
            <ErrorItem error={error} key={i} />
          ))}
        </div>
        <div className="app-body-bottom-padding" />
      </div>
    </div>
  );
}

export default App;
