import { Props } from "../../../../common/interfaces/props";

interface ListItemProps extends Props {
  item: string;
  runningTimer?: NodeJS.Timer;
  setSelectedTimer: React.Dispatch<React.SetStateAction<string>>;
}

export default function ListItem({
  item,
  runningTimer,
  setSelectedTimer,
}: ListItemProps) {
  return (
    <li
      onClick={() => {
        if (runningTimer) clearInterval(runningTimer);
        setSelectedTimer(item);
      }}
    >
      <span>{item}</span>
    </li>
  );
}
