import LightBox from "@components/components/LightBox";
import useWindowDimensions from "@components/hooks/useWindowDimensions";
import Carousel from "@components/shared/Carousel";
import Image from "@components/shared/Image";
import Typography from "@components/shared/Typography";
import VideoPlayer from "@components/shared/VideoPlayer";
import { useState } from "react";

type Image = {
  src: string;
  alt: string;
};
interface CarrousselImagesProps {
  images: Image[];
}

const Main = ({ images }: CarrousselImagesProps) => {
  const { width } = useWindowDimensions();

  let classesTypography = "";

  if (width <= 420) {
    classesTypography = " flex justify-center !text-2xl mt-[5%]";
  } else if (width > 420 && width <= 640) {
    classesTypography = " flex justify-center !text-4xl mt-[7%]";
  } else if (width > 640 && width <= 860) {
    classesTypography = " flex justify-center !text-5xl mt-[10%]";
  } else if (width > 860) {
    classesTypography = " flex justify-end pr-10 !text-6xl mt-[8%] gap-2 ";
  }

  const [selectedImage, setSelectedImage] = useState<Image>(images[0]);
  const [openLightBox, setOpenLightBox] = useState(false);
  const handleSelectImage = (image: Image) => {
    setSelectedImage(image);
    setOpenLightBox(!openLightBox);
    document.documentElement.style.overflow = "hidden";
  };
  const handleCloseLightBox = () => {
    setOpenLightBox(false);
    document.documentElement.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex flex-col text-white">
        <Typography text="Inovação" className={classesTypography} />
        <Typography text="Tecnologia" className={classesTypography} />
        <Typography text="Excelência" className={classesTypography} />

        <div className="flex flex-col  mt-[10%] bg-black rounded-t-lg p-3">
          <Typography
            text="Temos diversos equipamentos para seu evento ser inesquecível"
            className="!text-2xl pr-2 text-center pt-2 pb-10"
          />
          <div
            className={`flex justify-around gap-3 ${
              width < 660 ? "flex-col" : ""
            }`}
          >
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 660 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/lighting.svg"
                width={width < 660 ? 100 : 120}
                height={width < 660 ? 100 : 120}
                layout="fixed"
                alt="Iluminação"
              />
              <Typography
                text="Colocamos ainda a disposição de nossos clientes o mais moderno sistema de iluminação que tornará o seu evento ainda mais marcante. Em nossa sede própria você poderá conferir toda nossa estrutura, além de nossa frota de veículos, trazendo comodidade e segurança para nossos clientes."
                type="caption"
                className={`text-center ${width < 660 ? "w-[80%]" : "px-3"}`}
              />
            </div>
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 660 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/sound.svg"
                width={width < 660 ? 100 : 120}
                height={width < 660 ? 100 : 120}
                layout="fixed"
                alt="Som"
              />
              <Typography
                text="Contamos com equipamentos de última geracao e alta performace, atendendo os mais exigentes clientes, seja nas consoles, sistemas de PA, monitoração, back line e microfonação. Colocamos ainda a disposição de nossos clientes o mais moderno sistema de iluminação que tornará o seu evento ainda mais marcante. Em nossa sede própria você poderá conferir toda nossa estrutura, além de nossa frota de veículos, trazendo comodidade e segurança para nossos clientes."
                type="caption"
                className={`text-center ${width < 660 ? "w-[80%]" : "px-3"}`}
              />
            </div>
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 660 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/stage.svg"
                width={width < 660 ? 100 : 120}
                height={width < 660 ? 100 : 120}
                layout="fixed"
                alt="Palco"
              />
              <Typography
                text="Contamos com equipamentos de última geracao e alta performace, atendendo os mais exigentes clientes, seja nas consoles, sistemas de PA, monitoração, back line e microfonação."
                type="caption"
                className={`text-center ${width < 660 ? "w-[80%]" : "px-3"}`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 pt-[1%] bg-black p-3">
          <Typography
            text="Veja alguns de nossos trabalhos"
            className="!text-2xl text-center pt-2"
          />
          <Carousel
            columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
            overflowHidden
            items={images.map((image, index) => {
              return (
                <div key={image.alt}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={350}
                    height={230}
                    priority={index === 0}
                    className="px-1 cursor-pointer"
                    onClick={() => handleSelectImage(image)}
                  />
                </div>
              );
            })}
          />{" "}
        </div>
        <div className="flex flex-col bg-black p-3 justify-center items-center">
          <Typography
            text="Estamos há anos nesse mercado, e temos muita história para contar"
            className="!text-2xl text-center mb-5"
          />
          <VideoPlayer src="/videos/reveillon.mp4" type="video/mp4" />
        </div>
      </div>
      {openLightBox && selectedImage ? (
        <LightBox
          image={selectedImage}
          handleCloseLightBox={handleCloseLightBox}
        />
      ) : null}
    </>
  );
};

export default Main;
