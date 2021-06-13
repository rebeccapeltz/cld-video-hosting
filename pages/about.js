import Head from "next/head";
import LeftNav from "../components/LeftNav";

export default function About() {
  return (
    <div>
      <LeftNav navActive="about" />

      <div className="content">
        <Head>
          <title>Video Player with Cloudinary</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <header>
          <h1>About</h1>
          <p className="std">
            This is a sample application to show different techniques for
            hosting video on a web page.
          </p>
        </header>
      </div>
    </div>
  );
}
