import Head from "next/head";
import dynamic from "next/dynamic"; //add
import NavBar from "../components/NavBar";



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
        <NavBar navActive="home" />
      </header>
      <h2>HTML5 Video Embed Element</h2>
     The Video embed element is created by adding <em>source</em> tags with different
     video containers within a <em>video</em> tag.  We are using the [Cloudinary React
     SDK](https://cloudinary.com/documentation/react_integration) to generate these element.
      <section className="container">
        <div className="vp">
          <h3>Less than 1 minute</h3>
          <DynamicCldReact cloudName="cloudinary-training" publicId="surfing" />
        </div>
        <div className="vp">
          <h3>30 Minutes</h3>
          <DynamicCldReact cloudName="cloudinary-marketing" publicId="podcast/mx_matters/mx-matters-ep7-cli" />
        </div>
        <div className="vp">
          <h3>Greater than 1 hour</h3>
          <DynamicCldReact cloudName="cloudinary-marketing" publicId="podcast/devjams/ep4-alexpatterson-videoplayer" />
        </div>
       
      
        {/* <div className="nv">
          <h3>Small Video ABR</h3>
          <DynamicVideo cloudName="cloudinary-training" publicId="surfing" domId="vp3" />
        </div>
        <div className="nv">
        <h3>Large Video ABR</h3>
          <DynamicVideo cloudName="cloudinary-training" publicId="Andy_Griffith_Barneys_First_Car_512kb" domId="vp4"/>
        </div> */}
      </section>
    </div>
  );
}
