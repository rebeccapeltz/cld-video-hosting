import Head from "next/head";
import dynamic from "next/dynamic";
import LeftNav from "../components/LeftNav";

const DynamicCldReact = dynamic(() => import("../components/VideoEmbed"), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <div> <LeftNav navActive="videoembedelement" />
    <div className="content">
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <h1>Video Hosting</h1>
       
      </header>
      <h2>HTML5 Video Embed Element</h2>
      The Video embed element is created by adding <em>source</em> tags with
      different video containers within a <em>video</em> tag. We are using the  <a
            className="link"
            href="https://cloudinary.com/documentation/react_integration"
          >
            Cloudinary React SDK
          </a>{" "}
       to generate these elements.
      <section className="vid-container">
        <div className="ve">
          <h3>Less than 1 minute</h3>
          <DynamicCldReact cloudName="cloudinary-training" publicId="surfing" />
        </div>
        <div className="ve">
          <h3>30 Minutes</h3>
          <DynamicCldReact
            cloudName="cloudinary-marketing"
            publicId="podcast/mx_matters/mx-matters-ep7-cli"
          />
        </div>
        <div className="ve">
          <h3>Greater than 1 hour</h3>
          <DynamicCldReact
            cloudName="cloudinary-marketing"
            publicId="podcast/devjams/ep4-alexpatterson-videoplayer"
          />
        </div>
      </section>
    </div>
    </div>
  );
}
