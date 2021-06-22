const fetch = require("node-fetch");

const API_ENDPOINT =
  "https://cld-video-hosting.netlify.app/.netlify/functions/send-email";

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed!" };
  }

  // webhook creates a "message" object from incoming
  // and sends to email as string
  const message = {"message":JSON.parse(event.body)};
  console.log('parsed message', message);

  try {
    const options = {
      method: "post",
      body: JSON.stringify(message),
      headers: { "Content-Type": "text/html" },
    };
    const response = await fetch(API_ENDPOINT, options);
    const data = await response.json();
    console.log('data',data)
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }

  // return {
  //   statusCode:200,
  //   body: JSON.stringify(message)
  // }
};
