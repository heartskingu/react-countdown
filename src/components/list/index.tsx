import { Props } from "../../common/interfaces/props";
import ListItem from "./list-item";

interface ListProps extends Props {
  timerList: string[];
  runningTimer?: NodeJS.Timer;
  setSelectedTimer: React.Dispatch<React.SetStateAction<string>>;
}

export default function List({
  timerList,
  runningTimer,
  setSelectedTimer,
}: ListProps) {
  return (
    <ul>
      {timerList.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          runningTimer={runningTimer}
          setSelectedTimer={setSelectedTimer}
        />
      ))}
    </ul>
  );
}
