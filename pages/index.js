import Head from "next/head";
import dynamic from "next/dynamic"; //add
import Link from "next/link";


const DynamicVideo = dynamic(() => import("../components/CldVideoPlayer"), {
  ssr: false,
});

const DynamicCldReact = dynamic(() => import("../components/VideoEmbed"), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Video Hosting</h1>
        <ul>
          <li>
            <Link href="/">
              <a className="active">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/small_abr">
              <a>Small ABR</a>
            </Link>
          </li>
          <li>
            <Link href="/large_abr">
              <a >Large ABR</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </header>

     
      <section className="container">
        <div className="vp">
          <h2>Small Video HTML Video Embed</h2>
          <DynamicCldReact cloudName="cloudinary-training" publicId="surfing" />
        </div>
        <div className="vp">
          <h2>Large Video HTML Video Embed</h2>
          <DynamicCldReact cloudName="cloudinary-training" publicId="Andy_Griffith_Barneys_First_Car_512kb" />
        </div>
      
        {/* <div className="nv">
          <h2>Small Video ABR</h2>
          <DynamicVideo cloudName="cloudinary-training" publicId="surfing" domId="vp3" />
        </div>
        <div className="nv">
        <h2>Large Video ABR</h2>
          <DynamicVideo cloudName="cloudinary-training" publicId="Andy_Griffith_Barneys_First_Car_512kb" domId="vp4"/>
        </div> */}
      </section>
    </div>
  );
}
