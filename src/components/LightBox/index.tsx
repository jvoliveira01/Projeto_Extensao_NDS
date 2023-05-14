import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "../../shared/Image";

interface Props {
  image: {
    src: string | "";
    alt: string | "";
  };
  handleCloseLightBox: () => void;
}

const LightBox = ({ image, handleCloseLightBox }: Props) => {
  const { height } = useWindowDimensions();
  let maxWidhtImage = "4xl";

  if (height < 750) {
    maxWidhtImage = "2xl";
  }

  return (
    <div
      className="flex flex-col gap-2 h-auto fixed inset-0 bg-[#000000b9] items-center justify-center z-50"
      onClick={handleCloseLightBox}
    >
      <div
        className={`relative flex w-full max-w-${maxWidhtImage} items-center justify-center`}
      >
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
        <Image
          src="/close.svg"
          alt="Fechar"
          width={25}
          height={25}
          onClick={handleCloseLightBox}
          className="absolute !w-[38px] !h-[38px] rounded-full bg-[#ffc30e] p-1.5 top-2 right-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LightBox;
