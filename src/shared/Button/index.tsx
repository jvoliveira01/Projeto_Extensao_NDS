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
      className={`p-2 rounded uppercase font-semibold w-23 bg-[#000000] text-white hover:text-[#ffc30e] relative`}
    >
      <Typography text={label} />
    </button>
  );
};

export default Button;
