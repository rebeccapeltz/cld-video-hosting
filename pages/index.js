import Head from "next/head";
import NavBar from "../components/NavBar";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

export default function IndexPage() {
  return (
    <div className="page">
      <Head>
        <title>Hosting Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Video Hosting</h1>
        <NavBar navActive="home" />
      </header>
      <h2>Codecs, Containers and Browsers</h2>

      <p className="desc">
        The graphic helps to show the relationship between codec, containers,
        and browsers.
        <CloudinaryContext cloud_name="cloudinary-training">
          <Image publicId="video-hosting/codecs-containers-browsers">

          <Transformation width="800" height="600" gravity="auto" crop="fill" />

          </Image>
        </CloudinaryContext>
        <Image />
      </p>
    </div>
  );
}
