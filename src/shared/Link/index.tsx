import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ children, href, className }: Props) => {
  return (
    <a href={href} className={`cursor-pointer w-full ${className}`}>
      {children}
    </a>
  );
};

export default Link;
