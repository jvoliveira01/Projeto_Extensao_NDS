import React from "react";
import NextImage from "next/image";

interface Props {
  src: string;
  height: number;
  width: number;
  layout?: "fixed" | "responsive" | "intrinsic";
  alt: string;
  className?: string;
  priority?: boolean;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
}

const Image = ({
  src,
  height,
  width,
  layout = "responsive",
  alt,
  className,
  priority,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  if (layout === "fixed") {
    return (
      <span
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "inline-block",
        }}
      >
        <NextImage
          src={src}
          height={height}
          width={width}
          alt={alt}
          className={className}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          priority={priority}
          key={src}
        />
      </span>
    );
  }
  return (
    <NextImage
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={`${className} ${
        layout === "intrinsic" ? "max-w-full h-auto" : ""
      } ${layout === "responsive" ? "w-full h-auto" : ""}`}
      sizes={layout === "responsive" ? "100vw" : undefined}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      priority={priority}
      key={src}
    />
  );
};

export default React.memo(Image);
