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
                <h2 className="sec-title">Operation Manager(Onsite)</h2>
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
                  Now Hiring: Operations Manager to Lead and Drive Efficiency
                  </p>
                  <h2>What you will do</h2>
                  <ul>
                    <li>
                    Manage the daily operations of the HR, ESL, and SMM departments, ensuring smooth workflows and effective coordination.
                    </li>
                    <li>
                    Oversee and streamline processes to enhance productivity, quality, and overall departmental performance.
                    </li>
                    <li>
                    Collaborate with department heads to set goals, track performance, and implement improvements.
                    </li>
                    <li>
                    Handle scheduling, resource allocation, and problem-solving to ensure the efficiency of operations.
                    </li>
                    <li>
                    Develop and implement strategies to optimize processes across HR, ESL, and SMM teams.
                    </li>
                    <li>
                    Monitor and report on key operational metrics and make data-driven decisions for continuous
                    </li>
                    <li>
                    Foster a positive work environment by supporting team collaboration and communication.
                    </li>
                    
                  </ul>
                  <h2>Requirements</h2>
                  <ul>
                    <li>Proven experience as an Operations Manager or in a similar leadership role.</li>
                    <li>
                    Excellent organizational, problem-solving, and multitasking skills.
                    </li>
                    <li>Ability to manage multiple departments and prioritize tasks effectively.</li>
                    <li>
                    Strong leadership and communication skills to collaborate with cross-functional teams.
                    </li>
                    <li>Proficiency in project management tools and software.</li>
                    <li>Ability to analyze and improve operational performance using data-driven insights.</li>
                    <li>Bachelor’s degree in Business Administration, Management, or a related field (preferred).</li>
                  </ul>
                  <h2>Educational Qualification</h2>
                  <ul>
                    <li>
                    A Bachelor’s degree in Business Administration, Management, or a related field is preferred.
                    </li>
                    <li>
                    Additional certifications in Operations Management, HR, or relevant areas would be a plus.
                    </li>
                  </ul>
                  <h2>Perks & Benefits</h2>
                  <ul>
                    <li>
                    Competitive Salary
                    </li>
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
                    <span>Experience</span> 3 - 5 Years Experience
                  </li>
                  <li>
                    <span>Working Hours</span> 08 AM to 5 PM PH TIME
                  </li>
                  <li>
                    <span>Working Days</span> Mon - Friday
                  </li>
                  <li>
                    <span>Salary</span> 20k  - 30k
                  </li>
                  <li>
                    <span>Vacancy</span> No of Vacancies: 1
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
