import Head from "next/head";
import LeftNav from "../components/LeftNav";
import Iframe from "../components/Iframe";

export default function IndexPage() {
  const code = `<iframe src="https://codesandbox.io/embed/cld-advanced-concepts-training-video-player-6h3k3?fontsize=14&hidenavigation=1&theme=light"
  style="style="position: relative; height: 100%; width: 100%;" 
  title="cld-advanced-concepts-training-video-player"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
  return (
    <div>
      <Head>
        <title>Hosting Video</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <LeftNav navActive="sandboxcompare" />

      <div className="content">
        <header>
          <h1>Video Hosting</h1>
          {/* <NavBar navActive="sandboxcompare" /> */}
        </header>
        <h2>Codesandbox: Hosting Video</h2>
        <h3>Browser Video Embed Element vs Cloudinary Video Player</h3>
        <p className="desc">
          The video embed element is created by adding <em>source</em> tags with
          different video containers within a <em>video</em> tag. We are using
          the &nbsp;
          <a
            className="link"
            href="https://cloudinary.com/documentation/react_integration"
          >
            Cloudinary React SDK
          </a>{" "}
          &nbsp; to generate the element video embed element. The Cloudinary
          Video Player is used to generate the video player component with the
          help of the React <strong>useEffect</strong> hook. This hook will tell
          React follow some instructions after render.
        </p>
        <Iframe iframe={code} />`
      </div>
    </div>
  );
}
