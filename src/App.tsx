import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import CountdownTimer from "./components/countdown-timer";
import List from "./components/list";

function App() {
  const [timerInput, setTimerInput] = useState("00:00:00");
  const [timerList, setTimerList] = useState<string[]>([]);
  const [selectedTimer, setSelectedTimer] = useState("00:00:00");
  const [runningTimer, setRunningTimer] = useState<NodeJS.Timer>();

  function addTimer(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setTimerList((oldList) => [...oldList, timerInput]);
    setTimerInput("00:00:00");
  }

  return (
    <div className="App">
      <section className="timers-section">
        <form onSubmit={addTimer}>
          <input
            type="time"
            step={1}
            name="timer"
            id="timer"
            placeholder="Add a timer"
            value={timerInput}
            onChange={(event) => setTimerInput(event.target.value)}
          />
          <Button type="submit">Add</Button>
        </form>
        <List
          timerList={timerList}
          runningTimer={runningTimer}
          setSelectedTimer={setSelectedTimer}
        ></List>
      </section>
      <section className="countdown-timer">
        <CountdownTimer
          selectedTimer={selectedTimer}
          setSelectedTimer={setSelectedTimer}
          runningTimer={runningTimer}
          setRunningTimer={setRunningTimer}
        />
      </section>
    </div>
  );
}

export default App;
