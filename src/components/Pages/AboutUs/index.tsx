import useWindowDimensions from "@components/hooks/useWindowDimensions";
import sendFormEmail from "@components/services/mail";
import Container from "@components/shared/Container";
import Image from "@components/shared/Image";
import Typography from "@components/shared/Typography";

const AboutUs = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <div
        className={`${
          width >= 640 ? "pt-12" : "pt-5"
        } bg-[#0f0f0f] w-full h-[100%] p-5`}
      >
        <Typography text="Sobre nós" className="text-white" type="h1" />
        <div
          className={`p-5 flex gap-4 ${
            width > 850 ? "flex-row  items-center" : "flex-col items-center"
          }`}
        >
          <div className="h-[100%] items-stretch">
            <Typography
              text="Fundada em 1980, a Nave do Som começou como uma pequena operação fornecendo serviços de iluminação e som para eventos locais. Desde então, cresceu para se tornar um dos principais fornecedores de soluções de eventos da região. "
              className={`tracking-wide text-white pb-5 ${
                width > 850 ? "w-auto" : "w-auto"
              }`}
            />
            {width <= 850 && (
              <div className="flex w-[100%] justify-center items-center pb-5">
                <Image
                  src="/images/surgimento.png"
                  width={150}
                  height={150}
                  alt="Surgimento da Empresa"
                  className="rounded w-[50%]  min-w-[260px]"
                />
              </div>
            )}
            <Typography
              text="O que nos diferencia é o nosso compromisso com a qualidade e a excelência em tudo o que fazemos. Acreditamos que, para ter sucesso no negócio de eventos, é preciso estar sempre à frente das tendências, usando a tecnologia mais recente e inovando constantemente."
              className="text-white pb-5 tracking-wide"
            />
            <Typography
              text="Mas não é só isso que nos faz especiais. Nós valorizamos profundamente nossos clientes e trabalhamos arduamente para garantir que cada evento seja um sucesso. Nossa equipe é composta por profissionais altamente qualificados e experientes, que sabem como transformar sua visão em realidade."
              className="text-white pb-5 tracking-wide"
            />
          </div>
          {width > 850 && (
            <div className="min-w-[300px]">
              <Image
                src="/images/surgimento.png"
                width={150}
                height={150}
                alt="Surgimento da Empresa"
                className="rounded"
              />
            </div>
          )}
        </div>
        <div
          className={`flex justify-center bg-[#1f1f1f] rounded p-3 border ${
            width < 625 ? "flex-col divide-y" : "divide-x"
          }`}
        >
          <div className="flex flex-col gap-4 w-full text-center">
            <Typography
              text="Nossa Missão"
              className="text-white tracking-wide"
              type="h2"
            />
            <Typography
              text="A Nave do Som trabalha para atender você, nosso amigo e cliente, para tornar seu evento inesquecível. Fazemos um trabalho de excelência visando surpreender a todos, nos diferenciando do padrão que encontra-se no mercado. Trabalhamos em seu evento como se fosse nosso também!"
              className="text-white tracking-wide text-left p-5 pt-2"
            />
          </div>
          <div className="flex flex-col gap-4 w-full text-center">
            <Typography
              text="Valores que prezamos"
              className={`text-white tracking-wide ${width < 625 && "pt-3"}`}
              type="h2"
            />
            <ul className="flex flex-col text-white text-left p-5 pt-2 gap-3 list-disc list-inside">
              <li>Inovação</li>
              <li>Ética e compromisso</li>
              <li>Empatia</li>
              <li>Excelência</li>
              <li>Satisfação do cliente e do público, nosso maior bem</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
