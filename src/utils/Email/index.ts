interface SendEmailData {
  name: string;
  phone: string;
  email: string;
  matter: string;
}
export const sendContactEmail = async (data: SendEmailData) => 
fetch("api/email",{
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});