import Head from "next/head";
import dynamic from "next/dynamic"; //add
import NavBar from "../components/NavBar";
import Iframe from "../components/Iframe";

const Dynamic = dynamic(() => import("../components/Iframe"), {
  ssr: false,
});

export default function IndexPage() {
  const code = `<iframe src="https://codesandbox.io/embed/cld-advanced-concepts-training-video-player-6h3k3?fontsize=14&hidenavigation=1&theme=light"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="cld-advanced-concepts-training-video-player"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
  return (
    <div className="page">
      <Head>
        <title>Hosting Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Video Hosting</h1>
        <NavBar navActive="sandboxcompare" />
      </header>
      <h2>Codesandbox: Hosting Video</h2>
      <h3>Browser Video Embed Element vs Cloudinary Video Player</h3>
      <p className="desc">
        The video embed element is created by adding <em>source</em> tags with
        different video containers within a <em>video</em> tag. We are using the
        &nbsp;
        <a
          className="link"
          href="https://cloudinary.com/documentation/react_integration"
        >
          Cloudinary React SDK
        </a>{" "}
        &npsp; to generate the element video embed element. The Cloudinary Video
        Player is used to generate the video player component with the help of
        the React
        <strong>useEffect</strong> hook. This hook will tell React follow some
        instructions after render.
      </p>

      <div className="sandbox ">
        <Dynamic iframe={code} />`
      </div>

      {/* <section className="container">
        <div className="vp">
          <h3>Less than 1 minute</h3>
          <DynamicCldReact cloudName="cloudinary-training" publicId="surfing" />
        </div>
        <div className="vp">
          <h3>30 Minutes</h3>
          <DynamicCldReact cloudName="cloudinary-marketing" publicId="podcast/mx_matters/mx-matters-ep7-cli" />
        </div>
        <div className="vp">
          <h3>Greater than 1 hour</h3>
          <DynamicCldReact cloudName="cloudinary-marketing" publicId="podcast/devjams/ep4-alexpatterson-videoplayer" />
        </div>
      </section> */}
    </div>
  );
}
