import Main, { CarrousselImagesProps } from "@components/components/Pages/Home/Main";
import WhatsAppButton from "@components/components/WhatsAppButton";
import Container from "@components/shared/Container";
import HomePageBanner from "./Banner";

const Home = ({images}: CarrousselImagesProps) => {
  return (
    <div className="overflow-hidden">
      <HomePageBanner />
      <Container>
        <div className="w-full flex">
          <div className="flex flex-col w-full z-30">
            <Main images={images}/>
          </div>
        </div>
        <WhatsAppButton />
      </Container>
    </div>
  );
};

export default Home;
