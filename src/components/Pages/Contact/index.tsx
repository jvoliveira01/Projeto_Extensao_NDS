import { useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Container from "../../../shared/Container";
import Image from "../../../shared/Image";
import Typography from "../../../shared/Typography";
import { sendContactEmail } from "../../../utils/Email";
import { toast } from "react-toastify";

interface Form {
  name: string;
  phone: string;
  email: string;
  matter: string;
}
const Contact = () => {
  const { width } = useWindowDimensions();
  const [formFields, setFormFields] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    matter: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    if (!formFields.name || !formFields.phone || !formFields.email) {
      toast.error("Preencha todos os campos.");
    } else {
      try {
        setLoading(true);
        await sendContactEmail(formFields);
        setFormFields({
          name: "",
          phone: "",
          email: "",
          matter: "",
        });
        setLoading(false);
        toast.success("Email enviado com sucesso!");
      } catch (error) {
        setLoading(false);
        toast.error("Erro ao enviar email!");
      }
    }
  };
  return (
    <Container>
      <div
        className={`${
          width >= 640 ? "pt-12" : "pt-5"
        } flex flex-col bg-[#0f0f0f] w-full p-5 gap-6`}
      >
        <Typography type="h1" text="Contato" className="text-white" />
        <Typography
          text="Solicite um orçamento, tire suas dúvidas! Entre em contato com a gente para dar o play no seu evento."
          className="text-white"
        />
        <a
          href="https://api.whatsapp.com/send?phone=5537999881788"
          target="_blank"
          className="flex flex-row items-center gap-5 max-w-[205px]"
        >
          <div className="w-12 bg-[#ffc30e] rounded-full">
            <Image
              src="/whatsappPB.svg"
              alt="WhatsApp"
              width={20}
              height={20}
            />
          </div>
          <Typography text="(37)99988-1788" className="text-white" />
        </a>
        <a
          href="tel://03733221787"
          target="_blank"
          className="flex flex-row items-center gap-5 max-w-[195px]"
        >
          <div className="w-12 bg-[#ffc30e] rounded-full">
            <Image src="/phone.svg" alt="Telefone" width={30} height={30} />
          </div>
          <Typography text="(37)3322-1787" className="text-white" />
        </a>
        <Typography
          text="Preencha o formulário de e-mail e entraremos em contato com você."
          className="text-white"
        />
        <div className="w-full bg-white rounded min-h-[330px] p-3">
          <form
            className="flex flex-col h-full justify-between"
            method="POST"
            encType="text/plain"
          >
            <input
              type="text"
              value={formFields.name}
              placeholder="Nome Completo"
              className="bg-[#e8e8e8] p-3 rounded"
              onChange={(ev) => {
                return setFormFields((oldFields) => {
                  return {
                    ...oldFields,
                    name: ev.target.value,
                  };
                });
              }}
            />
            <input
              type="text"
              value={formFields.email}
              placeholder="E-mail"
              className="bg-[#e8e8e8] p-3 rounded"
              onChange={(ev) => {
                return setFormFields((oldFields) => {
                  return {
                    ...oldFields,
                    email: ev.target.value,
                  };
                });
              }}
            />
            <input
              type="text"
              value={formFields.phone}
              placeholder="Telefone"
              className="bg-[#e8e8e8] p-3 rounded"
              onChange={(ev) => {
                return setFormFields((oldFields) => {
                  return {
                    ...oldFields,
                    phone: ev.target.value,
                  };
                });
              }}
            />
            <textarea
              value={formFields.matter}
              placeholder="Assunto"
              className="bg-[#e8e8e8] p-3 rounded resize-none"
              rows={5}
              onChange={(ev) => {
                return setFormFields((oldFields) => {
                  return {
                    ...oldFields,
                    matter: ev.target.value,
                  };
                });
              }}
            />
          </form>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center justify-center bg-[#ffc30e] rounded w-28 h-10">
            {!loading ? (
              <input
                type="submit"
                placeholder="enviar"
                className="cursor-pointer text-white text-xl uppercase"
                onClick={handleSendEmail}
              />
            ) : (
              <div className="w-[30px] h-[30px]">
                <Image
                  src="/loading.svg"
                  width={50}
                  height={50}
                  alt="Carregando"
                  className="animate-spin"
                />
              </div>
            )}
          </div>
        </div>
        <Typography text="Onde estamos" type="h1" className="text-white" />
        <div className="flex w-full justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0313480759737!2d-45.44274528255615!3d-20.463905599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4edfd4b474e21%3A0xa6a64d028910a15b!2sR.%20Jos%C3%A9%20Alves%20Barbosa%2C%2056%20-%20Formiga%2C%20MG%2C%2035570-000!5e0!3m2!1spt-BR!2sbr!4v1683949285260!5m2!1spt-BR!2sbr"
            width="650"
            height="400"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
