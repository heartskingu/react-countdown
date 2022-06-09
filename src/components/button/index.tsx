import { Props } from "../../common/interfaces/props";

interface ButtonProps extends Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
