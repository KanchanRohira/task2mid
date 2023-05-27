import React, { useState, useEffect } from 'react';

const Timertask = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      console.log("Timee is up");
    }
  }, [time]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <h1>{time}</h1>
    </div>
  );
};

export default Timertask;
