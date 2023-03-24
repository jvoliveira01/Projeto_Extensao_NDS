import React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

const Link = ({ children, href, className, onClick }: Props) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`cursor-pointer w-full ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
