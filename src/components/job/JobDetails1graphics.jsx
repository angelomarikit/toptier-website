import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import JobDetailsModal1 from "./JobDetailsModal1esl";
import JobDetailsModal2 from "./JobDetailsModal2esl";

gsap.registerPlugin(ScrollTrigger);

const JobDetails1 = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          gsap.to(".job__detail-sidebar", {
            scrollTrigger: {
              trigger: ".job__detail",
              pin: ".job__detail-sidebar",
              pinSpacing: false,
              start: "top top",
              end: "bottom center",
              markers: false,
              delay: 1,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  const jobApply = () => {
    setModal1(true);
  };
  return (
    <>
      <section className="job__detail">
        <div className="container g-0 line pb-110">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8">
              <div className="job__detail-wrapper">
                <h2 className="sec-title">Graphics Designer(Onsite)</h2>
                <ul className="job__detail-meta">
                  <li>
                    <span>Location</span> San Pablo City Laguna
                  </li>
                  <li>
                    <span>Date</span> 25, Feb 2025
                  </li>
                  <li>
                    <span>Job Type</span> Full time (Onsite)
                  </li>
                </ul>
                <div className="job__detail-content">
                  <p>
                  Join Our Growing Team!
                  Passionate about design? Help create visually stunning and impactful designs that inspire and engage by delivering creative solutions as a Graphic Designer!
                  </p>
                  <h2>What you will do</h2>
                  <ul>
                    <li>
                    Create visually appealing designs for various digital and print materials, including websites, social media, ads, and promotional content.
                    </li>
                    <li>
                    Collaborate with the marketing and content teams to develop creative concepts that align with brand identity and goals.
                    </li>
                    <li>
                    Design graphics for presentations, reports, and other communication materials.
                    </li>
                    <li>
                    Maintain consistency across all design projects while adapting to the needs of different audiences.
                    </li>
                    <li>
                    Revise and update designs based on feedback from team members and stakeholders.
                    </li><li>
                    Stay up-to-date with the latest design trends, tools, and techniques to ensure fresh and innovative work.
                    </li>
                    
                  </ul>
                  <h2>Requirements</h2>
                  <ul>
                    <li>Experience is a plus but not required</li>
                    <li>
                    Proven experience as a Graphic Designer, with a strong portfolio showcasing your design work.
                    </li>
                    <li>Proficiency in design software such as Adobe Creative Suite (Illustrator, Photoshop, InDesign) or other industry-standard tools.</li>
                    <li>
                    Strong understanding of design principles, typography, color theory, and visual composition.
                    </li>
                    <li>Ability to work independently and collaboratively in a team environment.</li>
                    <li>Excellent communication skills to effectively present design concepts and collaborate with other teams.</li>
                    <li>Attention to detail and ability to meet deadlines while maintaining high-quality standards.</li>
                    <li>Knowledge of web design and user experience principles is a plus.</li>

                  </ul>
                  <h2>Educational Qualification</h2>
                  <ul>
                    <li>
                    College graduate, We accept also undergraduate with proven experienced. 
                    </li>
                  </ul>
                  <h2>Perks & Benefits</h2>
                  <ul>
                    <li>
                    Career Growth: Promotion Opportunities
                    </li>
                    <li>
                    Paid Leave
                    </li>
                    <li>
                    Commission Pay
                    </li>
                    <li>Performance Bonus</li>
                    <li>Government Benefits</li>
                  </ul>
                  <p>
                    We’re committed to creating the happiest company working for
                    and is proud to provide equal opportunity to all. All the
                    qualified applicants will receive consideration for
                    employment without regard to race, color, ancestry,
                    religion.
                  </p>
                </div>

                <div className="job__apply btn_wrapper">
                  <button
                    onClick={jobApply}
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Apply this <br />
                    Position <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
              <div className="job__detail-sidebar">
                <ul>
                  <li>
                    <span>Experience</span> Fresh Graduate - 5 Years Experience
                  </li>
                  <li>
                    <span>Working Hours</span> 08 AM to 5 PM PH TIME
                  </li>
                  <li>
                    <span>Working Days</span> Weekly 5 days
                  </li>
                  <li>
                    <span>Salary</span> 13K - 20K (Monthly)
                  </li>
                  <li>
                    <span>Vacancy</span> No of Vacancies: 01
                  </li>
                  <li>
                    <span>Deadline</span> Till posted
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <JobDetailsModal1
          modal1={modal1}
          setModal1={setModal1}
          setModal2={setModal2}
        />
        <JobDetailsModal2
          setModal1={setModal1}
          modal2={modal2}
          setModal2={setModal2}
        />
      </div>
    </>
  );
};

export default JobDetails1;
