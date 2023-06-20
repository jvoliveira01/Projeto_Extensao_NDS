import type { MouseEvent } from "react";
import Typography from "../Typography";

interface Props {
  label: string;
  onClick?: (event: MouseEvent) => void;
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded uppercase font-semibold w-23 bg-secondary-500 text-secondary-100 hover:text-primary-50 relative`}
    >
      <Typography text={label} />
    </button>
  );
};

export default Button;
