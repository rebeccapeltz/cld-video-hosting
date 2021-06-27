import Head from "next/head";
import dynamic from "next/dynamic";
import LeftNav from "../components/LeftNav";

const DynamicVideo = dynamic(() => import("../components/CldVideoPlayers"), {
  ssr: false,
});

export default function MultiplePlayers() {
  return (
    <div>
      <LeftNav navActive="multipleplayers" />

      <div className="content">
        <Head>
          <title>Multiple Video Players</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <h1>Less than 1 minute using ABR</h1>
        </header>

        <DynamicVideo
          cloudName="cloudinary-training"
          publicIds="surfing,rooster"
        />
      </div>
    </div>
  );
}
