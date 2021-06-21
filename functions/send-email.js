const client = require("@sendgrid/mail");
require("dotenv").config();
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed!" };
  } 

  const { message } = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

 

  const data = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `New message from sendgrid`,
    html: message,
  };

  try {
    await client.send(data);
    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ "msg": err}),
    };
  }
};
