const nodemailer = require("nodemailer");
const { google } = require('googleapis');

const sendEmail = async (options) => {
  try{
  const transporter = nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,

    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
  //3.2 define the email options
  //   console.log(options.email, options.text);
  //   console.log(process.env.MAIL_PASSWORD);
  const mailOptions = {
    from: options.email,
    to: `Benjamin Qian <${process.env.EMAIL}>`,
    subject: "Enquiry",
    text: options.text,
  };
  //3.3 send the email
  await transporter.sendMail(mailOptions);
}catch(error){
  console.error('Error sending email:', error);
  throw new Error('Failed to send email'); 
}
//if successful, we send a email back to user
try{
  const confirmationText = `Dear ${options.name},

It's Benjamin here. Thank you for your email. I appreciate you reaching out.
Just let you know that I've received your email and will contact you as soon as possible.

Best regards,

Benjamin Qian
`;
  const transporter = nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,

    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
  //3.2 define the email options
  //   console.log(options.email, options.text);
  //   console.log(process.env.MAIL_PASSWORD);
  const mailOptions = {
    from: `Benjamin Qian <${process.env.EMAIL}>`,
    to: options.email,
    subject: "this is a no-reply email",
    text: confirmationText,
  };
  //3.3 send the email
  await transporter.sendMail(mailOptions);
}catch(error){
  console.error('Error sending email:', error);
  throw new Error('Failed to send email'); 
}
}

module.exports = sendEmail;
