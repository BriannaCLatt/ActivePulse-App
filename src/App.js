/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import "./App.css";
import DurationExercise from "./components/DurationExercise.js";
import RepetitionExercise from "./components/RepetitionExercise.js";
import RunningExercise from "./components/RunningExercise.js";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetiiton";
const RUNNING_EXERCISE = "running";


let exerciseList = [
  { type: RUNNING_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" }
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  let [currentExercise, setCurrentExercise] = useState({});
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map((exercise) => (
            <li key={exercise.name}>
              <button onClick={() => buttonClick(exercise)}>
                {exercise.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case RUNNING_EXERCISE:
        screenComponent = (
          <RunningExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
         break;
        
        default: screenComponent = undefined
    }
  }
  return (
    <div className="App">
      <header className="App-header">{screenComponent}</header>
    </div>
  );
}

export default App;

