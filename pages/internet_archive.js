import Head from "next/head";
import dynamic from "next/dynamic";
import LeftNav from "../components/LeftNav";

const DynamicVideo = dynamic(() => import("../components/CldABR"), {
  ssr: false,
});

export default function internet_archive() {
  return (
    <div>
      <LeftNav navActive="internetarchive" />

      <div className="content">
        <Head>
          <title>Video Player with Cloudinary</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <header>
          <h1>30 Minutes no ABR</h1>
        </header>

        <div>
          <DynamicVideo
            cloudName="cloudinary-training"
            publicId="Andy_Griffith_Barneys_First_Car_512kb"
          />
        </div>
      </div>
    </div>
  );
}
