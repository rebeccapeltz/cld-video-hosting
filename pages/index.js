import Head from "next/head";
import NavBar from "../components/NavBar";
import {
  Image,
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
      </p>
      <CloudinaryContext cloud_name="cloudinary-training" secure="true">
        <Image publicId="video-hosting/ccb" alt="Codecs, Containers, and Browsers">
          <Transformation
            width="800"
            height="600"
            quality="100"
            crop="limit"
            fetch_format="auto"
            dpr="2.0"
          />
        </Image>
      </CloudinaryContext>
      <Image />
    </div>
  );
}
