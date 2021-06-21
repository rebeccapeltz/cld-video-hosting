const axios = require('axios')

exports.handler = async function (event, context, callback) {
  const message = JSON.parse(event.body);
  return {
    statusCode:200,
    body: JSON.stringify(message)
  }
  // axios
  // .post('https://cld-video-hosting.netlify.app/.netlify/functions/send-mail', {
  //   message: JSON.stringify(message)
  // })
  // .then(res => {
  //   console.log(`statusCode: ${res.statusCode}`)
  //   // console.log(res)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(res)
  //   };
  // })
  // .catch(error => {
  //   console.error("errors",error)
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(error)
  //   };
  // })
    
  
};
