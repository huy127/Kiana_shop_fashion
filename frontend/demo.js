import React, { useEffect, useRef } from 'react';

function Timer() {
  const intervalRef = useRef(null);
  const counterRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      counterRef.current += 1;
      console.log(`Counter: ${counterRef.current}`);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Counter: {counterRef.current}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default Timer;
