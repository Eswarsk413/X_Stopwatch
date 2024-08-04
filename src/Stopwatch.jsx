import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // 1000ms = 1 second
    } else {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <div>Time: {formatTime(time)}</div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={startStopwatch}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
