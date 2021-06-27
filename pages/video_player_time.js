import Head from "next/head";
import dynamic from "next/dynamic";
import LeftNav from "../components/LeftNav";

const DynamicCldReact = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <div>
      <LeftNav navActive="videoplayertime" />
      <div className="content">
        <Head>
          <title>Video Player with Cloudinary</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <header>
          <h1>Video Hosting</h1>
        </header>
        <h2>Video Player with ABR</h2>
        The Cloudinary Video Player can be configured to use Advanced Bitrate
        Streaming (ABR). For longer videos, eager transformations will help.
        <section className="vid-container">
          <div className="vp">
            <h3>Less than 1 minute</h3>
            <DynamicCldReact
              cloudName="cloudinary-training"
              publicId="surfing"
              domId="vp1"
            />
          </div>
          <div className="vp">
            <h3>30 Minutes</h3>
            <DynamicCldReact
              cloudName="cloudinary-marketing"
              publicId="podcast/mx_matters/mx-matters-ep7-cli"
              domId="vp2"
            />
          </div>
          <div className="vp">
            <h3>Greater than 1 hour</h3>
            <DynamicCldReact
              cloudName="cloudinary-marketing"
              publicId="podcast/devjams/ep4-alexpatterson-videoplayer"
              domId="vp3"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
