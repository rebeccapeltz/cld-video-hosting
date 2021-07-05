import Head from "next/head";
import LeftNav from "../components/LeftNav";
import Iframe from "../components/Iframe";

export default function IndexPage() {
  const code = `<iframe frameborder="0" width="100%" height="500px"  src="https://replit.com/@rpeltz/ABR-hd-profile?lite=true"></iframe>
  `;
  return (
    <div>
      <LeftNav navActive="addhdprofile" />
      <div className="content">
        <Head>
          <title>Hosting Video</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <h1>Video Hosting</h1>
        </header>
        <h2>repl.it: Add HD Profile for Advanced Bitrate Streaming</h2>
        <h3>Create derived video "chunk" in different dimensions</h3>
        <p className="desc">
          The HD profile is built in and provided by Cloudinary to create HLS
          264 manifest files and video chunks of the video "chunks" to enable
          Advanced Bitrate streaming.
        </p>

          <Iframe iframe={code} />`
      </div>
    </div>
  );
}
