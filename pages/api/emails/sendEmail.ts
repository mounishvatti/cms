import { Resend } from 'resend';

const resend = new Resend('re_crjN87Fq_Lb7c1rRM9HSqdYEuoxydYtnF');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mounishvatti2002@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});