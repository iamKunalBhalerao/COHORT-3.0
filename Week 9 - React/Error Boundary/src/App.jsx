import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <Card2 />
    </div>
  );
};

export default App;
