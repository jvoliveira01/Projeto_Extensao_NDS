import Typography from "@components/shared/Typography";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div
        className={`flex ${
          width < 575 && "flex-col"
        } justify-around bg-[#f0f0f0] text-black  ${
          width < 790 && "rounded-b-none"
        }  w-full max-w-7xl mx-auto rounded-b-lg`}
      >
        <div
          className={`flex flex-col gap-3 p-5 pb-0 items-center text-center ${
            width >= 790 && "w-1/3"
          }`}
        >
          <Typography
            type="h3"
            text="Contato"
            className="text-[#ffc30e] bg-[#000000] py-1 px-2 rounded-lg max-w-min text-center"
          />
          <div className="flex flex-col gap-y-2">
            <Typography type="caption" text="(37) 3322-1787" />
            <Typography type="caption" text="(37) 99988-1788" />
            <Typography type="caption" text="navedosom@navedosom.com.br" />
          </div>
        </div>

        {width >= 790 && (
          <div className="flex items-center text-center p-5  w-1/3">
            <Typography
              type="p"
              text="
              Agradecemos sua visita ao nosso site. Esperamos ter a oportunidade de transformar seu evento em um espetáculo único e inesquecível. Entre em contato conosco para mais informações."
            />
          </div>
        )}

        <div
          className={`flex flex-col gap-3 p-5 items-center text-center ${
            width >= 790 ? "w-1/3 pb-5" : "pb-0"
          }`}
        >
          <Typography
            type="h3"
            text="Nave do Som"
            className="text-[#ffc30e] bg-[#000000] py-1 px-2 rounded-lg text-center"
          />
          <div className="flex flex-col gap-y-2">
            <Typography type="caption" text="CNPJ: 09.199.680/0001-99" />
            <Typography
              type="caption"
              text="Rua José Alves Barbosa, 56, Bela Vista"
            />
            <Typography type="caption" text="Formiga/MG - CEP 35574-213" />
          </div>
        </div>
      </div>
      {width < 790 && (
        <div className="flex text-center bg-[#f0f0f0] p-5 justify-center ">
          <Typography
            type="caption"
            className=" w-full max-w-[80%]"
            text="Agradecemos sua visita ao nosso site. Esperamos ter a oportunidade de transformar seu evento em um espetáculo único e inesquecível. Entre em contato conosco para mais informações."
          />
        </div>
      )}
      <Typography
        type="caption"
        text={`Copyright © ${new Date().getFullYear()} Nave do Som - Todos os direitos reservados`}
        className="text-[#c9c9c9] text-center py-2"
      />
    </>
  );
};

export default Footer;
