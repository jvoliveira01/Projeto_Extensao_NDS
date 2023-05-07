import { GetServerSideProps } from "next";
import Head from "next/head";
import { NextPage } from "next";
import SiteFrontLayout from "../layouts/SiteFront";
import Home from "../components/Pages/Home/home";

interface CarrousselImagesProps {
  imagesBanners: {
    src: string;
    alt: string;
  }[];
  imagesCarousel: {
    src: string;
    alt: string;
  }[];
}

const Page: NextPage<CarrousselImagesProps> = ({
  imagesBanners,
  imagesCarousel,
}) => {
  return (
    <SiteFrontLayout>
      <Head>
        <title>Nave do Som</title>
        <meta
          name="description"
          content="Os melhores equipamentos e a melhor equipe para realizar suas festas você encontra aqui na Nave do Som"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Nave do Som" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#1f1f1f]">
        <Home imagesBanners={imagesBanners} imagesCarousel={imagesCarousel} />
      </div>
    </SiteFrontLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  CarrousselImagesProps
> = async () => {
  const imagesBanners = [
    {
      src: "/images/1.png",
      alt: "1",
    },
    {
      src: "/images/2.png",
      alt: "2",
    },
    {
      src: "/images/3.png",
      alt: "3",
    },
  ];

  const imagesCarousel = [
    {
      src: "/images/image1.png",
      alt: "1",
    },
    {
      src: "/images/image2.png",
      alt: "2",
    },
    {
      src: "/images/image3.png",
      alt: "3",
    },
    {
      src: "/images/image4.png",
      alt: "4",
    },
    {
      src: "/images/image5.png",
      alt: "5",
    },
    {
      src: "/images/image6.png",
      alt: "6",
    },
    {
      src: "/images/image7.png",
      alt: "7",
    },
    {
      src: "/images/image8.png",
      alt: "8",
    },
    {
      src: "/images/image9.png",
      alt: "9",
    },
    {
      src: "/images/image10.png",
      alt: "10",
    },
    {
      src: "/images/image11.png",
      alt: "11",
    },
    {
      src: "/images/image12.png",
      alt: "12",
    },
  ];

  return {
    props: {
      imagesBanners,
      imagesCarousel,
    },
  };
};

export default Page;
