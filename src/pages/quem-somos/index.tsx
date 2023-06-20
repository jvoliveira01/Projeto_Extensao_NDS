import Head from "next/head";
import { NextPage } from "next";
import SiteFrontLayout from "../../layouts/SiteFront";
import AboutUs from "../../components/Pages/AboutUs";

const Page: NextPage = () => {
  return (
    <SiteFrontLayout>
      <Head>
        <title>Quem Somos - Nave do Som</title>
        <meta
          name="description"
          content="Os melhores equipamentos e a melhor equipe para seu evento você encontra aqui na Nave do Som"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Nave do Som" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-secondary-50">
        <AboutUs />
      </div>
    </SiteFrontLayout>
  );
};

export default Page;
