const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KE } = process.env;

sgMail.setApiKey(SENDGRID_API_KE);

const sendMail = async (data) => {
  const email = { ...data, from: 'vaniutasa@gmail.com' };
  await sgMail.send(email);
  return true;
};

module.exports = sendMail;
