import emailjs from "@emailjs/browser";
// import .env.local
const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { name, email, message },
    {
      publicKey: process.env.NEXT_PUBLIC_USER_ID,
      limitRate: {
        throttle: 10000, 
      },
    }
  );

export default mail;
