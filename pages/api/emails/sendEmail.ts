import { Resend } from 'resend';

const resend_api_key = process.env.RESEND_API_KEY;
const resend = new Resend(resend_api_key);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mounishvatti2002@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});