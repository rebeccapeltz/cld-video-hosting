import Head from "next/head";
import NavBar from "../components/NavBar";



export default function About() {
  return (
    <div>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>About</h1>
        <NavBar navActive="about" />
      <p>This is a sample application to show different techniques for hosting video on a web
        page.  
      </p>
      </header>

     
     
    </div>
  );
}
