import React from "react";
import Carousel from "@components/shared/Carousel";
import Image from "@components/shared/Image";

const HomePageBanner = () => {
  const banners = [
    {
      name: "Banner-1",
      src: "/images/1.jpg",
      srcMobile: "/images/1.jpg",
      alt: "Banner 1",
    },
    {
      name: "Banner-2",
      src: "/images/2.jpg",
      srcMobile: "/images/2.jpg",
      alt: "Banner 2",
    },
    {
      name: "Banner-3",
      src: "/images/3.jpg",
      srcMobile: "/images/3.jpg",
      alt: "Banner 3",
    },
    {
      name: "Banner-4",
      src: "/images/4.jpg",
      srcMobile: "/images/4.jpg",
      alt: "Banner 4",
    },
    {
      name: "Banner-5",
      src: "/images/5.jpg",
      srcMobile: "/images/5.jpg",
      alt: "Banner 5",
    },
    {
      name: "Banner-6",
      src: "/images/6.jpg",
      srcMobile: "/images/6.jpg",
      alt: "Banner 6",
    },
    {
      name: "Banner-7",
      src: "/images/7.jpg",
      srcMobile: "/images/7.jpg",
      alt: "Banner 7",
    },
    {
      name: "Banner-8",
      src: "/images/8.jpg",
      srcMobile: "/images/8.jpg",
      alt: "Banner 8",
    },
    {
      name: "Banner-9",
      src: "/images/9.jpg",
      srcMobile: "/images/9.jpg",
      alt: "Banner 9",
    },
    {
      name: "Banner-10",
      src: "/images/10.jpg",
      srcMobile: "/images/10.jpg",
      alt: "Banner 10",
    },
  ];
  return (
    <Carousel
      classNameContainer="-top-5 relative w-full"
      overflowHidden={false}
      hideNavigation={true}
      items={banners.map((banner, index) => {
        return (
          <div key={banner.name} className=" absolute w-full h-full">
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              width={1920}
              height={753}
              priority={index === 0}
            />
          </div>
        );
      })}
    />
  );
};

export default React.memo(HomePageBanner);
