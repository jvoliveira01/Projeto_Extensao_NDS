import type { MouseEvent } from "react";

interface Props {
  label: string;
  className?: string;
  variant?: "standard" | "secondary";
  onClick?: (event: MouseEvent) => void;
}

const Button = ({
  label,
  className = "",
  variant = "standard",
  onClick,
}: Props) => {
  let specificClassName = "";

  if (variant === "standard") {
    specificClassName = "bg-[#000000] text-white hover:text-[#ffc30e]";
  }

  if (variant === "secondary") {
    specificClassName = `bg-[#000000] text-[#ffc30e]`;
  }

  return (
    <button
      onClick={onClick}
      className={`p-2 rounded uppercase font-semibold w-23 ${className} ${specificClassName} relative`}
    >
      {label}
    </button>
  );
};

export default Button;
