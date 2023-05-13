import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import Typography from "../../../../shared/Typography";
import Image from "../../../../shared/Image";
import Carousel from "../../../../shared/Carousel";
import VideoPlayer from "../../../../shared/VideoPlayer";
import LightBox from "../../../LightBox";

type Image = {
  src: string;
  alt: string;
};
interface Props {
  imagesCarousel: Image[];
}

const Main = ({ imagesCarousel }: Props) => {
  const { width } = useWindowDimensions();

  let classesTypography = "";

  if (width <= 420) {
    classesTypography = " flex justify-center !text-2xl mt-[5%] uppercase";
  } else if (width > 420 && width <= 640) {
    classesTypography = " flex justify-center !text-4xl mt-[7%] uppercase";
  } else if (width > 640 && width <= 860) {
    classesTypography = " flex justify-center !text-5xl mt-[10%] uppercase";
  } else if (width > 860) {
    classesTypography =
      " flex justify-end pr-10 !text-6xl mt-[8%] gap-2  uppercase";
  }

  const [selectedImage, setSelectedImage] = useState<Image>(imagesCarousel[0]);
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

        <div className="flex flex-col mt-[10%] bg-black rounded-t-lg p-3">
          <Typography
            text="Temos diversos equipamentos para seu evento ser inesquecível"
            className="pr-2 text-center pt-2 pb-10"
            type="h1"
          />
          <div
            className={`flex justify-around gap-3 ${
              width < 920 ? "flex-col" : ""
            }`}
          >
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 920 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/lighting.svg"
                width={width < 920 ? 100 : 120}
                height={width < 920 ? 100 : 120}
                layout="fixed"
                alt="Iluminação"
              />
              <Typography
                text="A Iluminação é uma das peças mais importantes em um evento, pois transmitem a energia do ambiente e tornam tudo mais bonito e colorido. Por isso, é fundamental contar com equipamentos de qualidade, que permitam criar diferentes efeitos de luz, com cores e intensidades variadas. Por isso, se você deseja um evento perfeito, não deixe de usar uma boa iluminação. Os modernos equipamentos de iluminação que temos à disposição são capazes de transformar qualquer ambiente, proporcionando uma experiência única e inesquecível ao público! "
                type="p"
                className={`text-justify ${
                  width < 920 ? "w-[80%]" : "px-3"
                } leading-7`}
              />
            </div>
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 920 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/sound.svg"
                width={width < 920 ? 100 : 120}
                height={width < 920 ? 100 : 120}
                layout="fixed"
                alt="Som"
              />
              <Typography
                text="Além dos equipamentos modernos de iluminação, também contamos com sistemas de som e sonorização de alta performance, que atendem às mais exigentes demandas do mercado de eventos. Nossa equipe técnica é altamente especializada e está preparada para garantir que o som do seu evento esteja sempre perfeito, seja para uma apresentação musical, um discurso ou uma cerimônia. Esses são elementos indispensáveis para que o seu evento seja um sucesso absoluto! E não estamos exagerando, afinal, é através do som que conseguimos criar o clima perfeito para cada momento da sua festa."
                type="p"
                className={`text-justify ${
                  width < 920 ? "w-[80%]" : "px-3"
                } leading-7`}
              />
            </div>
            <div
              className={`flex flex-col items-center gap-4 ${
                width < 920 ? "w-full" : "max-w-[33%]"
              }`}
            >
              <Image
                src="/stage.svg"
                width={width < 920 ? 100 : 120}
                height={width < 920 ? 100 : 120}
                layout="fixed"
                alt="Palco"
              />
              <Typography
                text="E se você quer que seu evento seja realmente memorável, uma estrutura de palco e treliças bem montada é essencial. Nossas estruturas possuem os mais altos padrões de segurança e qualidade, para garantir a segurança e conforto de todos durante o evento. E com nossos fogos automatizados, você terá um show de luzes e cores que vai encantar a todos os presentes! Além disso, nossa equipe técnica está sempre à disposição para ajudar em todas as etapas do processo, desde a escolha das estruturas até a instalação dos equipamentos no local. Tudo é feito com muito profissionalismo e atenção aos detalhes, para que você tenha a melhor experiência possível."
                type="p"
                className={`text-justify ${
                  width < 920 ? "w-[80%]" : "px-3"
                } leading-7`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 pt-[1%] bg-black p-3">
          <Typography
            text="Veja alguns de nossos trabalhos"
            className="text-center pt-2"
            type="h1"
          />
          <Carousel
            columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
            overflowHidden
            items={imagesCarousel.map((image, index) => {
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
        <div className="flex flex-col bg-black p-3 gap-y-5 justify-center items-center">
          <Typography
            text="Estamos há anos nesse mercado, e temos muita história para contar..."
            className="text-center"
            type="h1"
          />
          <VideoPlayer src="/videos/video.mp4" poster="/videos/thumbnail.gif" />
        </div>
        <div className="flex w-full bg-black justify-center p-5">
          <div className="flex flex-col w-full max-w-4xl gap-y-5 justify-center items-center">
            <Typography
              text="Temos tudo o que você precisa, desde a iluminação de alta qualidade até a estruturas de palco, treliças e fogos."
              className="text-justify"
              type="p"
            />
            <Typography
              text="A NAVE DO SOM É SUA MELHOR ESCOLHA"
              className="text-center text-[#ffc30e]"
              type="h2"
            />
            <Typography
              text="Estamos sempre investindo em equipamentos modernos e de alta performance para garantir que nossos clientes tenham acesso ao melhor do mundo dessa arte que é a realização de eventos com tanta excelência. Além disso, contamos com uma equipe  qualificada, pronta para agir em todas as etapas do processo, desde o planejamento até a execução."
              className="text-justify"
              type="p"
            />
            <Typography
              text="Fale com a gente, e veja como podemos te ajudar. Estamos ansiosos para te atender!"
              className="text-justify"
              type="p"
            />
          </div>
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
