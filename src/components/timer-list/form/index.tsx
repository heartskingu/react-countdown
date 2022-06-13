import { useState } from "react";
import { Props } from "../../../common/interfaces/props";
import Button from "../../button";

interface FormProps extends Props {
  setTimerList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export default function Form({ setTimerList }: FormProps) {
  const [timerInput, setTimerInput] = useState("00:00:00");

  function addTimer(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setTimerList((oldList) => [...oldList, timerInput]);
    setTimerInput("00:00:00");
  }

  return (
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
  );
}
