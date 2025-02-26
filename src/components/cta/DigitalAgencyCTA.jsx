import Link from "next/link";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Apply today</p>
                <h2 className="cta__title title-anim">
                We would be thrilled to have you join our growing company
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="/job-details-esl"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Apply now{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
