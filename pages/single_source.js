import Head from "next/head";
import LeftNav from "../components/LeftNav";

export default function IndexPage() {
  return (
    <div>
      <LeftNav navActive="singlesource" />

      <div className=" content">
        <Head>
          <title>Hosting Video</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <h1>Video Hosting</h1>
        </header>
        <h2>Single Source: Experiment with Codecs, Containers, Browsers</h2>

        <div className="desc">
          <p>
            What if the source container provided isn't supported on your
            browser?
          </p>
        </div>
        <div>
          <section className="flex-contain">
            <article>
              <h4>Video Tag</h4>
              <p>.mov, h264, type not specified</p>
              <video
                controls
                src="https://res.cloudinary.com/cloudinary-training/video/upload/v1623789140/sample-files/file_example_MOV_1920_2_2MB.mov"
                width="300"
              ></video>
            </article>
            <article>
              <h4>Embed Element</h4>
              <p>.mov, h264, type="video/quicktime"</p>
              <video controls width="300">
                <source
                  src="https://res.cloudinary.com/cloudinary-training/video/upload/v1623789140/sample-files/file_example_MOV_1920_2_2MB.mov"
                  type="video/quicktime"
                ></source>
                Your browser does not support the video tag.
              </video>
            </article>
            <article>
              <h4>Embed Element</h4>
              <p>.mov, h264, type="video/mp4"</p>
              <video controls width="300">
                <source
                  src="https://res.cloudinary.com/cloudinary-training/video/upload/v1623789140/sample-files/file_example_MOV_1920_2_2MB.mov"
                  type="video/mp4"
                ></source>
                Your browser does not support the video tag.
              </video>
            </article>
          </section>
          <div className="test-links">
            <a href="https://res.cloudinary.com/cloudinary-training/video/upload/v1623789140/sample-files/file_example_MOV_1920_2_2MB.mov">
              .mov video container
            </a>
          </div>
        </div>
        <div className="test-links">
          <a
            target="_blank"
            href="https://res.cloudinary.com/cloudinary-training/video/upload/v1617035635/video.mp4"
          >
            .mp4 video container
          </a>
        </div>
      </div>
    </div>
  );
}
