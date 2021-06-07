import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";

import { useEffect } from "react";
const CldVideoPlayers = (props) => {
  const cld = new Cloudinary({ cloud_name: props.cloudName });
  const publicIds = props.publicIds.split(",");

  useEffect(() => {
    const options = {
      muted: true,
      controls: true,
      width:"300",
      height:"200",
      crop:"fill"
    };
    const players = cld.videoPlayers(".cld-video-player", options);
    // {
    // fluid: true,
    // autoplay: false,
    // muted: true,
    // controls: true,
    // width:"800",
    // height:"600",
    // crop:"fill",
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
    // }
    // );
    // players[0].source(publicIds[0]);
    players.forEach((player, index) => {
      player.source(publicIds[index])
    })
  });

  return (
    <section className="vid-container">
      <div>
        <h3>Video 1</h3>
        <div>
        <video className="cld-video-player" />
        </div>
      </div>
      <div>
      <h3>Video 2</h3>
        <div>
        <video className="cld-video-player" />
      </div>
      </div>
    </section>
  );
};
export default CldVideoPlayers;
