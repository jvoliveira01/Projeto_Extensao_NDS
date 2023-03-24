import React from 'react';

interface Props {
  text: string | number;
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'caption';
  className?: string;
}

const Typography = ({ text, type, className = '' }: Props) => {
  const sharedClassName = 'leading-tight';

  const Paragraph = (
    <p className={`text-base ${sharedClassName} ${className}`}>{text}</p>
  );
  const H1 = (
    <h1 className={`font-semibold text-2xl ${sharedClassName}  ${className}`}>
      {text}
    </h1>
  );
  const H2 = (
    <h2 className={`font-semibold text-2xl ${sharedClassName}  ${className}`}>
      {text}
    </h2>
  );
  const H3 = (
    <h3 className={`font-semibold text-xl ${sharedClassName}  ${className}`}>
      {text}
    </h3>
  );
  const Caption = (
    <p className={`text-xs ${sharedClassName}  ${className}`}>{text}</p>
  );

  switch (type) {
    case 'h1': {
      return H1;
    }
    case 'h2': {
      return H2;
    }
    case 'h3': {
      return H3;
    }
    case 'p': {
      return Paragraph;
    }
    case 'caption': {
      return Caption;
    }
    default: {
      return Paragraph;
    }
  }
};

export default React.memo(Typography);
