import React from "react";
import Carousel from "../../../../shared/Carousel";
import Image from "../../../../shared/Image";

interface Props {
  imagesBanners: {
    src: string;
    alt: string;
  }[];
}

const HomePageBanner = ({ imagesBanners }: Props) => {
  return (
    <Carousel
      classNameContainer="-top-5 relative "
      overflowHidden={false}
      hideNavigation={true}
      items={imagesBanners.map((banner) => {
        return (
          <div key={banner.src} className="absolute w-full h-full">
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              width={1242}
              height={827}
            />
          </div>
        );
      })}
    />
  );
};

export default React.memo(HomePageBanner);
