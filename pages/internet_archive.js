import Head from "next/head";
import dynamic from "next/dynamic"; //add
import NavBar from "../components/NavBar";

const DynamicVideo = dynamic(() => import("../components/CldABR"), {
  ssr: false,
});

export default function internet_archive() {
  return (
    <div className="page">
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>30 Minutes no ABR</h1>
        <NavBar navActive="internetarchive" />
      </header>

      <div>
        <DynamicVideo
          cloudName="cloudinary-training"
          publicId="Andy_Griffith_Barneys_First_Car_512kb"
        />
      </div>
    </div>
  );
}
