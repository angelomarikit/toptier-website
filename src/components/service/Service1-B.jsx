import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/business-automation/1.png";
import Service12 from "../../../public/assets/imgs/service/business-automation/2.png";
import Service13 from "../../../public/assets/imgs/service/business-automation/3.png";
import Service14 from "../../../public/assets/imgs/service/business-automation/4.png";
import Service15 from "../../../public/assets/imgs/service/business-automation/5.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        School Automation <br />
                        Management
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Gym Management <br />
                        System
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                      Clinic Automation <br />
                      Platform
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                      E-commerce <br /> and Retail Platform
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                      Customized Automation <br /> Management
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Revolutionize Your School's Efficiency with Our Automation Management Service
                        </h2>
                        <p>
                        Our School Automation Management Service is designed to streamline administrative tasks, enhance communication, and improve overall efficiency within your institution. From managing student records and attendance to automating grading and scheduling, our system reduces manual work and allows educators to focus more on teaching. With real-time access to performance data, parents and administrators can easily track student progress, while teachers can seamlessly plan lessons and assignments. This all-in-one solution improves organization, enhances productivity, and ensures a smoother experience for everyone involved, creating a smarter and more efficient school environment.
                        </p>
                        
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contact us
                            <br />
                            now <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Transform Your Gym Operations with Our Comprehensive Management System
                        </h2>
                        <p>
                        Our Gym Management System is designed to streamline day-to-day operations, making it easier to manage memberships, class schedules, and billing. With features like automated member registration, attendance tracking, and performance analytics, our system helps you run your gym more efficiently. It also offers a user-friendly interface for members to book classes, track progress, and make payments seamlessly. With real-time data and insights, you can make informed decisions to enhance member satisfaction, improve retention, and drive business growth. Experience the future of gym management today!
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contact us
                            <br />
                            now <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Streamline Your Clinic Operations with Our Comprehensive Automation Platform
                        </h2>
                        <p>
                        Our Clinic Automation Platform is designed to optimize your clinic’s workflow, making it easier to manage patient appointments, medical records, billing, and more. With features like automated appointment scheduling, patient reminders, and electronic health records (EHR) management, our system reduces administrative burdens, allowing your team to focus on patient care. The platform also offers secure, real-time access to patient data, enhancing communication and improving decision-making. Improve patient satisfaction, increase efficiency, and elevate the overall clinic experience with our cutting-edge automation solution.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contact us
                            <br />
                            now <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Elevate Your Business with Our Powerful E-Commerce and Retail Platform
                        </h2>
                        <p>
                        Our E-Commerce and Retail Platform is designed to simplify and accelerate your business operations, from inventory management to order fulfillment. With features like seamless product listings, secure payment processing, and real-time inventory tracking, our platform helps you manage your online store effortlessly. It also offers customer analytics, personalized shopping experiences, and integrated shipping solutions, ensuring smoother transactions and increased customer satisfaction. Whether you’re a small shop or a growing retail business, our platform empowers you to reach more customers, boost sales, and streamline your operations.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contact us
                            <br />
                            now <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Transform Your Business with Our Customized Automation Management Solution"
                        </h2>
                        <p>
                        Our Customized Automation Management Solution is tailored to streamline and optimize your business operations, regardless of industry. From automating repetitive tasks to integrating workflows across departments, our platform enhances efficiency and reduces manual errors. With features like automated data processing, real-time reporting, and seamless system integrations, you can focus more on growth and less on routine tasks. Whether you're in manufacturing, retail, or services, our flexible solution adapts to your unique needs, helping you boost productivity, cut costs, and drive business success. Let us help you automate, innovate, and grow.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contact us
                            <br />
                            now <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
