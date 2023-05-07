// @ts-nocheck
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const configNodemailer = nodemailer.createTransport({
  pool: true,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default configNodemailer;
