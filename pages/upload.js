import Head from "next/head";
import LeftNav from "../components/LeftNav";
import Iframe from "../components/Iframe";

export default function UploadPage() {
  const code = `<iframe frameborder="0"  style="style="position: relative; height: 100%; width: 100%;"  src="https://replit.com/@rpeltz/cld-upload-node?lite=true"></iframe>
  `;
  const codeoutputonly = `<iframe frameborder="0"  style="style="position: relative; height: 100%; width: 100%;"  src="https://replit.com/@rpeltz/cld-upload-node?lite=true&outputonly=1"></iframe>
  `;
  const codespotlight = `<iframe frameborder="0"  style="style="position: relative; height: 100%; width: 100%;"  src="https://replit.com/@rpeltz/cld-upload-node?embed=true"></iframe>
  `;
  const codespotlightoutputonlye = `<iframe frameborder="0"  style="style="position: relative; height: 100%; width: 100%;"  height="500px" src="https://replit.com/@rpeltz/cld-upload-node?embed=true&outputonly=1"></iframe>
  `;
  return (
    <div>
      <LeftNav navActive="upload" />
      <div className="content">
        <Head>
          <title>Hosting Video</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <h1>Video Hosting</h1>
        </header>
        <h2>repl.it: Cloudinary Upload</h2>
        <h3>Create derived video "chunk" in different dimensions</h3>
        <p className="desc">
          Several ways to add credentials to perform and upload.
        </p>
        <div className="repl-contain">
          <h4>lite=true</h4>
          <Iframe iframe={code} />`
        </div>

        <div className="repl-contain">
          <h4>lite=true and outputonly=1</h4>
          <Iframe iframe={codeoutputonly} />`
        </div>

        <div className="repl-contain">
          <h4>embed=true</h4>
          <Iframe iframe={codespotlight} />`
        </div>

        <div className="repl-contain">
          <h4>embed=true and outputonly=1</h4>
          <Iframe iframe={codespotlight} />`
        </div>
      </div>
    </div>
  );
}
