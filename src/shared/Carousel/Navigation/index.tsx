import React from "react";
import Image from "@components/shared/Image";

interface Props {
  changeActiveItem: (goToSlide: number) => void;
  activeItem: number;
  direction: "left" | "right";
  className?: string;
}

const CarouselNavigation = ({
  changeActiveItem,
  direction,
  activeItem,
  className = "",
}: Props) => {
  return (
    <button
      type="button"
      className={`${
        direction === "left" ? "left-0" : "right-0 "
      } top-0 flex absolute z-10 justify-center px-2 items-center h-12 bottom-3 my-auto`}
      onClick={() => {
        return changeActiveItem(
          direction === "left" ? activeItem - 1 : activeItem + 1
        );
      }}
    >
      <div
        className={`inline-flex justify-center items-center  w-8 h-8 rounded-full bg-white  ${className} `}
      >
        <Image
          src="/arrow.svg"
          className={`${direction === "left" ? "rotate-180" : ""}`}
          width={30}
          height={30}
          layout="intrinsic"
          alt={direction === "left" ? "Anterior" : "Próximo"}
        />
      </div>
    </button>
  );
};

export default React.memo(CarouselNavigation);
