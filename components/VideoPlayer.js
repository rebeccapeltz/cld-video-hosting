import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";

import { useEffect } from "react";
const VideoPlayer = (props) => {
  const cld = new Cloudinary({ cloud_name: props.cloudName });

  useEffect(() => {
    const options = {
      sourceTypes: ["hls", "mp4"],
      muted: true,
      controls: true,
      sourceTransformation: {
        hls: [{ streaming_profile: "hd" }],
        mp4: [{ quality: "auto" }],
      },
      playbackRates: [0.5, 1, 1.5, 2],
    };
    const videoPlayer = cld.videoPlayer(props.domId, options);
    // {
    //   publicId: props.publicId,
    //   // fluid: true,
    //   autoplay: false,
    //   muted: true,
    //   controls: true,
    //   width:"800",
    //   height:"600",
    //   crop:"fill",
    // transformation: [
    //   {
    //     overlay: "video-logo",
    //     format: "png",
    //     width: 100,
    //     color: "white",
    //     gravity: "north_east",
    //     x: 5,
    //     y: 5,
    //   },
    // ],
    // });
    videoPlayer.source(props.publicId);
  });

  return <video className="cld-video-player" id={props.domId}/>;
};
export default VideoPlayer;
