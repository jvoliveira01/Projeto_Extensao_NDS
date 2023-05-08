// @ts-nocheck
import dotenv from "dotenv";
import configNodemailer from "../../utils/Email/config";
import { NextApiRequest, NextApiResponse } from "next";

dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {
        const data = req.body;
        const textMail = `Nome do Cliente: ${data.name}, Email: ${data.email}, Telefone: ${data.phone}, Assunto: ${data.matter}. Esse e-mail é automático, favor NÃO RESPONDER`;
        const htmlMail = `Novo e-mail enviado do site: <br /> Remetente: ${data.name} <br /> Telefone para contato: ${data.phone} <br /> E-mail: ${data.email} <br /> Assunto: ${
            data.matter !== "" ? `${data.matter}` : "REMETENTE NÃO INFORMOU ASSUNTO."} `;
        
        try {
            await configNodemailer.sendMail(
            {
                from: data.email,
                to: `"Nave Do Som" <${process.env.EMAIL_NAVE_DO_SOM}>`,
                subject: "Novo e-mail enviado do site",
                text: textMail,
                html: htmlMail,
            })
            return res.status(200).json({success: true});
        } catch (err: any) {
            console.log(err);
            return res.status(400).json({message: err.message});
        }
    }
}

export default handler;