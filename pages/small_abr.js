import Head from "next/head";
import dynamic from "next/dynamic"; //add
import Link from "next/link";

const DynamicVideo = dynamic(() => import("../components/CldVideoPlayer"), {
  ssr: false,
});

export default function large_abr() {
  return (
    <div>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Small Video using ABR</h1>

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/small_abr">
              <a className="active">Small ABR</a>
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

      <div className="nv">
        <h2>Small Video ABR</h2>
        <DynamicVideo
          cloudName="cloudinary-training"
          publicId="surfing"
          domId="vp4"
        />
      </div>
    </div>
  );
}
