import Story1 from "../../../public/assets/imgs/story/1.jpg";
// import Story2 from "../../../public/assets/imgs/story/front.mp4";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/4.jpg";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>1990</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Top Notch Service</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  At TopTier Digital Solutions, our story began with a passion for innovation and a drive to help businesses thrive in a rapidly changing digital landscape. Founded by Mr. Angelo Marikit, we set out with one clear mission: to offer personalized, top-tier services that make a real difference for our clients.

                  With years of experience in ESL, marketing, business automation, and digital services, Mr. Angelo Marikit built TopTier with the belief that every business, no matter its size, deserves the tools and expertise to succeed. From helping students around the world master English to supporting companies in automating their operations, we aim to provide services that are truly one of a kind.


                  </p>
                  <p>
                  What sets us apart is our unwavering commitment to putting our clients first. We take the time to understand their needs and create customized solutions that drive growth, streamline processes, and achieve real results. Whether it’s boosting marketing efforts, optimizing business operations, or delivering effective ESL solutions, we are here to help you succeed at every step.

                At TopTier Digital Solutions, your success is our priority, and we’re proud to offer services that are not just effective, but transformative. Let us partner with you to take your business to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <video loop muted autoPlay playsInline width={520} height={"auto"}>
                  <source src="assets/imgs/story/front2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              {/* <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div> */}
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline width={520} height={"auto"}>
                  <source src="assets/imgs/story/front.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <video loop muted autoPlay playsInline width={520} height={"auto"}>
                  <source src="assets/imgs/story/front3.mp4" type="video/mp4" />
                </video>
                <br/>
                {/* <video loop muted autoPlay playsInline width={520} height={"auto"}>
                  <source src="assets/imgs/story/front4.mp4" type="video/mp4" />
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
