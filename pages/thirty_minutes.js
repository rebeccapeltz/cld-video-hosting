import Head from "next/head";
import dynamic from "next/dynamic"; //add
import NavBar from "../components/NavBar";

const DynamicVideo = dynamic(() => import("../components/CldABR"), {
  ssr: false,
});

export default function less_than_one_minute() {
  return (
    <div>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>30 Minutes using ABR</h1>
        <NavBar navActive="thirtyminutes" />
      </header>
      <section className="container">
        <div>
          <DynamicVideo
            cloudName="cloudinary-marketing"
            publicId="podcast/mx_matters/mx-matters-ep7-cli"
          />
        </div>
      </section>
    </div>
  );
}
