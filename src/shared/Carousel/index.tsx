import { useCallback, useEffect, useState } from "react";
import CarouselItem from "./Item";
import useWindowDimensions from "@components/hooks/useWindowDimensions";
import CarouselNavigation from "./Navigation";

interface Props {
  items: React.ReactNode[];
  columns?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  classNameContainer?: string;
  overflowHidden?: boolean;
  autoplay?: boolean;
  hideNavigation?: boolean;
}

const Carousel = ({
  items,
  columns = { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
  classNameContainer = "",
  overflowHidden = true,
  autoplay = true,
  hideNavigation,
}: Props) => {
  const [activeItem, setActiveItem] = useState(0);

  const { width } = useWindowDimensions();
  let selectedColumns = 0;

  if (width < 500) {
    selectedColumns = columns.xs;
  }

  if (width >= 500 && width < 620) {
    selectedColumns = columns.sm;
  }

  if (width >= 620 && width < 820) {
    selectedColumns = columns.md;
  }

  if (width >= 820 && width < 970) {
    selectedColumns = columns.lg;
  }

  if (width >= 970) {
    selectedColumns = columns.xl;
  }

  const [withAutoplay, setWithAutoplay] = useState(autoplay);

  const changeActiveItem = useCallback(
    (goToSlide: number) => {
      if (goToSlide >= items.length - Math.round(selectedColumns) + 1) {
        setActiveItem(0);
      } else if (goToSlide < 0) {
        setActiveItem(items.length - Math.round(selectedColumns));
      } else {
        setActiveItem(goToSlide);
      }
    },
    [items.length, selectedColumns]
  );

  useEffect(() => {
    if (withAutoplay) {
      const interval = setInterval(() => {
        changeActiveItem(activeItem + 1);
      }, 9000);
      return () => {
        return clearInterval(interval);
      };
    }

    return () => {};
  }, [activeItem, withAutoplay, changeActiveItem]);

  const handleManualChange = useCallback(
    (goToSlide: number) => {
      changeActiveItem(goToSlide);
      setWithAutoplay(false);
    },
    [changeActiveItem]
  );

  return (
    <div
      className={`relative w-full h-full text-center ${
        overflowHidden ? "overflow-hidden" : ""
      }`}
    >
      {hideNavigation ? null : (
        <div className="w-full">
          <CarouselNavigation
            activeItem={activeItem}
            changeActiveItem={handleManualChange}
            direction="left"
          />
          <CarouselNavigation
            activeItem={activeItem}
            changeActiveItem={handleManualChange}
            direction="right"
          />
        </div>
      )}
      <div
        className={`whitespace-nowrap transition-transform ${classNameContainer}`}
        style={{
          transform: `translateX(${activeItem * -(100 / selectedColumns)}%)`,
        }}
      >
        {items.map((item, index) => {
          return (
            <CarouselItem key={index} width={`${100 / selectedColumns}%`}>
              {item}
            </CarouselItem>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
