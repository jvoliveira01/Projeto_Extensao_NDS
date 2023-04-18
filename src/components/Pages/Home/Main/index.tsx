import useWindowDimensions from "@components/hooks/useWindowDimensions";
import Carousel from "@components/shared/Carousel";
import Image from "@components/shared/Image";
import Typography from "@components/shared/Typography";

export interface CarrousselImagesProps{
  images: {
    src: string;
    alt: string;
  }[];
}

export default function Main({images}: CarrousselImagesProps){
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

  

  return (
    <div className="flex flex-col text-white">
      <Typography text="Inovação" className={classesTypography} />
      <Typography text="Tecnologia" className={classesTypography} />
      <Typography text="Satisfação" className={classesTypography} />

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
      <div className="flex flex-col gap-y-10 pt-[1%] bg-black p-3">
        <Typography
          text="Veja alguns de nossos trabalhos"
          className="!text-2xl pr-2 text-center pt-2"
        />
          <Carousel
          overflowHidden={false}
          columns={{ xs: 1, sm: 1.5, md: 2.2, lg: 3.05 }}
          classNameContainer="z-0 relative"
          items={images.map((image, index) => {
            return (
              <div
                key={image.alt}
                className="w-full max-w-6xl flex justify-center transition-all scale-97 hover:scale-100 "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="intrinsic"
                  width={300}
                  height={300}
                  priority={index === 0}
                />
              </div>
            );
          })}
        />
        
      </div>
      <div className="flex flex-col bg-black p-3">
        <Typography text="Parceiros" className="!text-2xl text-center" />
      </div>
      <div className="flex flex-col bg-black p-3 pb-6">
        <Typography text="Depoimentos" className="!text-2xl text-center" />
      </div>
    </div>
  );
};