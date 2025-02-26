import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/service-details-1.PNG";
import ThumbDev2 from "../../../public/assets/imgs/thumb/service-details-2.PNG";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  English Second Language Service
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                  Our expert ESL teachers are dedicated to helping students worldwide master English. With personalized lessons and supportive environments, they boost confidence, improve fluency, and open doors to new opportunities. Join our global community and start learning today with our passionate instructors
                  </p>
                  <p>
                  We’d love to partner with you to provide expert ESL teachers for your students. Our passionate educators offer personalized, effective lessons that boost confidence and fluency in English. Let’s collaborate to enhance your offerings and help students achieve their language goals.
                  </p>
                </div>
                <ul>
                  <li>+ Enhanced Learning Outcomes</li>
                  <li>+ Global Reach</li>
                  <li>+ Personalized Instruction</li>
                  <li>+ Flexible Scheduling</li>
                  <li>+ Cultural Sensitivity</li>
                  <li>+ Increased Student Engagement </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Development Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev2}
                  alt="Development Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
