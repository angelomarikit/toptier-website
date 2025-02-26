import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/esl-details-2.jpeg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Frequently Ask Questions
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        What are the qualifications to become ESL teacher?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        No experience is required—our team will provide comprehensive training for the actual operation. 
                        While a Bachelors degree in Education with any major is preferred, we welcome applicants from any 4-year course. We’re looking for motivated individuals eager to learn and grow within our supportive team. 
                        If you have a passion for professional development and are ready to take on new challenges, we encourage you to apply!
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        What is the setup for the teachers, Is it work from home or onsite?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          {
                            "The current setup is onsite, but if an opportunity for a work-from-home arrangement becomes available in the future, employees will be welcome to apply."
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        What is the time schedule?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We have to 2 campaign that you can choose.
                          <br/>
                          Mon - Wed, Fri - Sun (Restday thursday) 1PM - 10PM
                          <br/>
                          Mon - Fri, 6PM - 3AM
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        How much is the salary?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Salary Range between 16,000 to 40,000 pesos depending on commision, attendance and performance.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        How can I apply?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          You can email us and send your resume at support@toptiersolutions.io or you can go directly at our office Monday to Friday 8am - 5pm.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
