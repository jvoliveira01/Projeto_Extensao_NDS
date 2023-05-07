import configNodemailer from "../config";

interface Props {
  name: string;
  phone: string;
  email: string;
  matter: string;
}

const sendMail = async ({ name, phone, email, matter }: Props) => {
  const textMail = `Nome do Cliente: ${name}, Email: ${email}, Telefone: ${phone}, Assunto: ${matter}. Esse e-mail é automático, favor NÃO RESPONDER`;
  const htmlMail = `Novo e-mail enviado do site: <br /> Remetente: ${name} <br /> Telefone para contato: ${phone} <br /> E-mail: ${email} <br /> Assunto: ${
    matter !== "" ? `${matter}` : "REMETENTE NÃO INFORMOU ASSUNTO."
  } `;
  try {
    await configNodemailer.sendMail(
      {
        from: email,
        to: '"Nave Do Som" <joaovitooroliv2015@yahoo.com>',
        subject: "Novo e-mail enviado do site",
        text: textMail,
        html: htmlMail,
      },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("E-mail enviado com sucesso");
        window.alert("E-mail enviado com sucesso!");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export default sendMail;
