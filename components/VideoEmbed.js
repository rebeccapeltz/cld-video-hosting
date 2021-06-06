import { useRef } from "react";
import { Video, CloudinaryContext,Transformation} from "cloudinary-react";

const VideoEmbed = (props) => {
  // const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name={props.cloudName}>
      <Video
        publicId={props.publicId}
        width="300"
        height="200"
        crop="fill"
        controls
        muted
        // innerRef={videoRef}
      >
        {/* <Transformation>
          width="400",
          height="300",
          crop="fill"

        </Transformation> */}
      </Video>
    </CloudinaryContext>
  );
};

export default VideoEmbed;
