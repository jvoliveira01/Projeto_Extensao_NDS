import { GetServerSideProps } from 'next';
import Head from "next/head";
import { NextPage } from "next";
import SiteFrontLayout from "@components/layouts/SiteFront";
import Home from "@components/components/Pages/Home/home";
import { CarrousselImagesProps } from '@components/components/Pages/Home/Main';

const Page: NextPage = ({images}: CarrousselImagesProps) => {
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
        <Home images={images} />
      </div>
    </SiteFrontLayout>
  );
};

export default Page;

export const getServerSideProps:GetServerSideProps = async (context) => {
  const images = [
    {
      src: "/images/1.jpg",
      alt: "1",
    },
    {
      src: "/images/2.jpg",
      alt: "2",
    },
    {
      src: "/images/3.jpg",
      alt: "3",
    },
    {
      src: "/images/4.jpg",
      alt: "4",
    },
    {
      src: "/images/5.jpg",
      alt: "5",
    },
    {
      src: "/images/6.jpg",
      alt: "6",
    },
    {
      src: "/images/7.jpg",
      alt: "7",
    },
  ];

  return {
    props: {
      images
    },
  };
};
