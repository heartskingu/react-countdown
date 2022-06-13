import { useState } from "react";
import "./App.css";
import CountdownTimer from "./components/countdown-timer";
import TimerList from "./components/timer-list";

function App() {
  const [selectedTimer, setSelectedTimer] = useState("00:00:00");
  const [runningTimer, setRunningTimer] = useState<NodeJS.Timer>();

  return (
    <div className="App">
      <section className="timers-section">
        <TimerList
          runningTimer={runningTimer}
          setSelectedTimer={setSelectedTimer}
        />
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
