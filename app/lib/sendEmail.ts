import emailjs from "@emailjs/browser";

type EmailParams = {
  name: string,
  email: string,
  message: string,
}

export async function sendEmail(params: EmailParams) {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  if (!serviceID || !templateID) {
    throw new Error("Missing EmailJS env variables");
  }
  try {

    const result = await emailjs.send(serviceID, templateID, params, { publicKey });
    return { success: true };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false };
  }
}