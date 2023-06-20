import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
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
  video: {
    src: string;
  };
}

const Page: NextPage<CarrousselImagesProps> = ({
  imagesBanners,
  imagesCarousel,
  video,
}) => {
  return (
    <SiteFrontLayout>
      <Head>
        <title>Nave do Som</title>
        <meta
          name="description"
          content="Os melhores equipamentos e a melhor equipe para seu evento você encontra aqui, na Nave do Som"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Nave do Som" />
        <meta
          name="keywords"
          content="eventos, som, iluminação, palcos, festas, fogos, nave do som, artista, música"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-secondary-50">
        <Home
          imagesBanners={imagesBanners}
          imagesCarousel={imagesCarousel}
          video={video}
        />
      </div>
    </SiteFrontLayout>
  );
};

export const getStaticProps: GetStaticProps<
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
    {
      src: "/images/image13.png",
      alt: "13",
    },
    {
      src: "/images/image14.png",
      alt: "14",
    },
    {
      src: "/images/image15.png",
      alt: "15",
    },
    {
      src: "/images/image16.png",
      alt: "16",
    },
  ];

  const video = {
    src: "/videos/video.mp4",
  };

  return {
    props: {
      imagesBanners,
      imagesCarousel,
      video,
    },
  };
};

export default Page;
