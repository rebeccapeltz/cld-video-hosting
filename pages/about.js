import Head from "next/head";
import LeftNav from "../components/LeftNav";

export default function About() {
  return (
    <div>
      <LeftNav navActive="about" />

      <div className="content">
        <Head>
          <title>Video Player with Cloudinary</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <h1>About</h1>
          <p className="std">
            This is a notebook to show different techniques and processes for
            hosting video on a web page.
          </p>
        </header>
      </div>
    </div>
  );
}
