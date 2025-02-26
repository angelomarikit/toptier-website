import ServiceDetail from "../../../public/assets/imgs/thumb/service-detail-esl.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const ServiceDetailsService = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                Unreplaceable Events & Fun Activities at Toptier
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>
                  {
                    "You’ll have the opportunity to work alongside young professionals who are expertly trained to perform at a high standard while truly enjoying what they do. Each team member brings a passion for their craft, ensuring that every task is approached with both professionalism and enthusiasm. This creates an environment where quality work is not only expected but also done with a sense of enjoyment, making every project an opportunity for both growth and satisfaction. It’s a dynamic setting where excellence and fun go hand in hand."
                  }
                </p>
                <p>
                Experience a series of exciting and interactive events that are designed to enhance your 
                language skills while having fun! The ESL department offers a variety of activities, from cultural celebrations to language games, providing the perfect opportunity to connect with fellow students, practice English in a relaxed setting, and create lasting memories. Whether you are looking to improve your speaking, listening, or writing skills, 
                these unreplaceable events promise a unique way to learn and enjoy the process! Stay tuned for upcoming activities and be sure to mark your calendars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;
