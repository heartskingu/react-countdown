import { useState } from "react";
import { Props } from "../../common/interfaces/props";
import Form from "./form";
import List from "./list";

interface TimerListProps extends Props {
  runningTimer?: NodeJS.Timer;
  setSelectedTimer: React.Dispatch<React.SetStateAction<string>>;
}

export default function TimerList({
  runningTimer,
  setSelectedTimer,
}: TimerListProps) {
  const [timerList, setTimerList] = useState<string[]>([]);

  return (
    <>
      <Form setTimerList={setTimerList} />
      <List
        timerList={timerList}
        runningTimer={runningTimer}
        setSelectedTimer={setSelectedTimer}
      ></List>
    </>
  );
}
