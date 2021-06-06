require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.uploader
  .upload("https://res.cloudinary.com/cloudinary-training/video/upload/v1622941945/Andy_Griffith_Barneys_First_Car_512kb.mp4", {
    public_id: "video-trn/barneys-first-car",
    resource_type: "video",
    type: "upload",
    eager_async: true,
    eager_notification_url:"https://webhook.site/20d13ebe-105c-4f04-9719-7e1e55f6ad94", 
    eager: {
      crop: 'fill',
      width: 300,
      gravity: 'auto',
      aspect_ratio: '16:9'
    }
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => console.log(error));
