import React, { useState, useEffect, useCallback } from "react";

export default function RunningExercise({ exercise, setMenuScreen }) {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [laps, setLaps] = useState([]);

  const updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    let currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [updateTimer]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setTimer(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, timer]);
  };

  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");

  return (
    
    <div style={{ width: "100vw", textAlign: "center" }}>
        <div>
            <p>{exercise.name}</p>
        </div>
      <p style={{ fontSize: "7em", margin: "auto", fontFamily: "monospace" }}>
        {mins}:{secs}.{mills}
      </p>
      <div>
        <button style={{ fontSize: "4em" }} onClick={startStop}>
          {running ? "Pause" : "Start"}
        </button>
        <button style={{ fontSize: "4em" }} onClick={reset}>
          Reset
        </button>
        <button style={{ fontSize: "4em" }} onClick={recordLap}>
          Record Lap
        </button>
      </div>
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>
          Back to Menu
        </button>
      <div>
        <p>Lap Times</p>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>Lap {index + 1}: {lapTime} milliseconds</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

