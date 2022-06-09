import { Props } from "../../common/interfaces/props";
import timeToSeconds from "../../common/utils/time";
import Button from "../button";

interface CountdownTimerProps extends Props {
  selectedTimer: string;
  runningTimer?: NodeJS.Timer;
  setSelectedTimer: React.Dispatch<React.SetStateAction<string>>;
  setRunningTimer: React.Dispatch<
    React.SetStateAction<NodeJS.Timer | undefined>
  >;
}

export default function CountdownTimer({
  selectedTimer,
  runningTimer,
  setSelectedTimer,
  setRunningTimer,
}: CountdownTimerProps) {
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
    <div>
      <div>
        <span>{selectedTimer}</span>
      </div>
      <Button onClick={() => startCountdown()}>Start</Button>
      <Button onClick={() => clearInterval(runningTimer)}>Pause</Button>
    </div>
  );
}
