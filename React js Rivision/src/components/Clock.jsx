import React, { useEffect, useState } from "react";

const Clock = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return <div>Clock : {timer}</div>;
};

export default Clock;
