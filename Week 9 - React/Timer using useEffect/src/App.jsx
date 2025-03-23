import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer((currentValue) => !currentValue);
    }, 5000);
  }, []);

  return <div>{showTimer == true ? <Timer /> : null}</div>;
};

export default App;
