import Image from "../../shared/Image";

interface Props {
  image: {
    src: string | "";
    alt: string | "";
  };
  handleCloseLightBox: () => void;
}

const LightBox = ({ image, handleCloseLightBox }: Props) => {
  return (
    <div
      className="flex flex-col gap-2 fixed inset-0 bg-[#000000b9] items-center justify-center z-50"
      onClick={handleCloseLightBox}
    >
      <div className="w-[40px] h-[40px] cursor-pointer">
        <Image
          src="/close.svg"
          alt="Fechar"
          width={25}
          height={25}
          onClick={handleCloseLightBox}
        />
      </div>
      <div className="flex flex-row w-[100%] max-w-4xl items-center justify-center">
        <Image
          src={image.src}
          height={700}
          width={460}
          alt={image.alt}
          className="rounded-lg"
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};

export default LightBox;
