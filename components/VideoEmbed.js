import { useRef } from "react";
import { Video, CloudinaryContext} from "cloudinary-react";

const VideoEmbed = (props) => {
  return (
    <CloudinaryContext cloud_name={props.cloudName}>
      <Video
        publicId={props.publicId}
        width="300"
        height="200"
        crop="fill"
        controls
        muted
      >
      </Video>
    </CloudinaryContext>
  );
};

export default VideoEmbed;
