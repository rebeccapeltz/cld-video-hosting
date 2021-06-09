import Head from "next/head";
import dynamic from "next/dynamic"; 
import NavBar from "../components/NavBar";

const DynamicVideo = dynamic(() => import("../components/CldVideoPlayers"), {
  ssr: false,
});

export default function MultiplePlayers() {
  return (
    <div className="page">
      <Head>
        <title>Multiple Video Players</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Less than 1 minute using ABR</h1>
        <NavBar navActive="multipleplayers" />
      </header>

        <DynamicVideo
          cloudName="cloudinary-training"
          publicIds="surfing,rooster"
        />
     
    </div>
  );
}
