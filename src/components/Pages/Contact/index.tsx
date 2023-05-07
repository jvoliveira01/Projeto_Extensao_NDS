import { useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Container from "../../../shared/Container";
import Image from "../../../shared/Image";
import Typography from "../../../shared/Typography";
import { MailService } from "../../../utils/Email";

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

  const handleSendEmail = async () => {
    if (!formFields.name || !formFields.phone || !formFields.email) {
      window.alert("Preencha todos os campos!");
    } else {
      await MailService.sendEmail(formFields);
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
              src="/whatsappPB.png"
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
            <Image src="/telefone.png" alt="WhatsApp" width={30} height={30} />
          </div>
          <Typography text="(37)3322-1787" className="text-white" />
        </a>
        <Typography
          text="Preencha o formulário de e-mail e entraremos em contato com você o mais breve possível"
          className="text-white"
        />
        <div className="w-full bg-white rounded min-h-[250px] p-3">
          <form
            className="flex flex-col h-full justify-between"
            action="mailto:joaovitooroliv2015@gmail.com"
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
            <input
              type="text"
              value={formFields.matter}
              placeholder="Assunto"
              className="bg-[#e8e8e8] p-3 rounded"
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
          <input
            type="submit"
            placeholder="Enviar"
            className="cursor-pointer text-white bg-[#ffc30e] w-24 h-9 rounded"
            onClick={handleSendEmail}
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
