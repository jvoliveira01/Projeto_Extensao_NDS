import Container from "../../../shared/Container";
import WhatsAppButton from "../../WhatsAppButton";
import HomePageBanner from "./Banner";
import Main from "./Main";
interface Props {
  imagesBanners: {
    src: string;
    alt: string;
  }[];
  imagesCarousel: {
    src: string;
    alt: string;
  }[];
}

const Home = ({ imagesBanners, imagesCarousel }: Props) => {
  return (
    <div className="overflow-hidden">
      <HomePageBanner imagesBanners={imagesBanners} />
      <Container>
        <div className="w-full flex">
          <div className="flex flex-col w-full z-30">
            <Main imagesCarousel={imagesCarousel} />
          </div>
        </div>
        <WhatsAppButton />
      </Container>
    </div>
  );
};

export default Home;
