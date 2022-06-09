import React, { useState } from "react";
import "./App.css";

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

  function timeToSeconds(time: string) {
    const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");
    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
  }

  function startCountdown() {
    if (!selectedTimer) return;

    let seconds = timeToSeconds(selectedTimer);
    setRunningTimer(
      setInterval(() => {
        if (seconds-- > 0) {
          const hour = String(Math.floor(seconds / 360)).padStart(2, "0");
          const min = String(Math.floor(seconds / 60)).padStart(2, "0");
          const sec = String(seconds % 60).padStart(2, "0");
          setSelectedTimer(`${hour}:${min}:${sec}`);
        } else {
          clearInterval(runningTimer);
        }
      }, 1000)
    );
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
          <button type="submit">Add</button>
        </form>
        <ul>
          {timerList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                if (runningTimer) clearInterval(runningTimer);
                setSelectedTimer(item);
              }}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="countdown-timer">
        <div>
          <span>{selectedTimer}</span>
        </div>
        <button onClick={() => startCountdown()}>Start</button>
        <button onClick={() => clearInterval(runningTimer)}>Pause</button>
      </section>
    </div>
  );
}

export default App;
