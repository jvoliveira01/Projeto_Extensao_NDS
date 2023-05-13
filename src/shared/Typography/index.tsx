import React from "react";

interface Props {
  text: string | number;
  type?: "h1" | "h2" | "p" | "caption";
  className?: string;
}

const Typography = ({ text, type, className = "" }: Props) => {
  const sharedClassName = "leading-tight";

  const Paragraph = (
    <p className={`text-[18px] ${sharedClassName} ${className}`}>{text}</p>
  );
  const H1 = (
    <h1 className={`font-semibold text-3xl ${sharedClassName}  ${className}`}>
      {text}
    </h1>
  );
  const H2 = (
    <h2 className={`font-semibold text-2xl ${sharedClassName}  ${className}`}>
      {text}
    </h2>
  );
  const Caption = (
    <p className={`text-[14px] ${sharedClassName}  ${className}`}>{text}</p>
  );

  switch (type) {
    case "h1": {
      return H1;
    }
    case "h2": {
      return H2;
    }
    case "p": {
      return Paragraph;
    }
    case "caption": {
      return Caption;
    }
    default: {
      return Paragraph;
    }
  }
};

export default React.memo(Typography);
