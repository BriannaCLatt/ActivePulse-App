import StopWatch from "./StopWatch.js"
export default function DurationExercise({ exercise, setMenuScreen }) {
  let { name } = exercise;
  return (
    <div>
      <p>{name}</p>
      <StopWatch />
      <button style={{fontSize: "1em" }} onClick={setMenuScreen}>Back to Menu</button>
    </div>
  );
}