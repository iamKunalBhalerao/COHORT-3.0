import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      console.log("from Inside Clock");
      setTime((prev) => prev + 1);
    }, 1000);

    // cleanup functions
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <>
      <h1>{time} is current Time</h1>
    </>
  );
};

export default Timer;
