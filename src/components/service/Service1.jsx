import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.jpg";
import Service12 from "../../../public/assets/imgs/service/2.jpg";
import Service13 from "../../../public/assets/imgs/service/3.jpg";
import Service14 from "../../../public/assets/imgs/service/4.jpg";
import Service15 from "../../../public/assets/imgs/service/5.jpg";
import Service16 from "../../../public/assets/imgs/service/6.jpg";
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
                        English Second <br />
                        Language
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web & Mobile <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                      Social media marketing <br />
                        (SMM)
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                      Customer <br /> Support Service
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                      Business <br /> Automation
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Paid Advertisement
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
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service16}
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
                        Empowering English Learners: Tailored Solutions for Success in Language Mastery
                        </h2>
                        <p>
                        At TopTier Digital Solutions, we understand the unique challenges faced by English language learners. Our tailored services are designed to help you master English at your own pace, with personalized lessons, expert guidance, and innovative tools. Whether you're looking to improve your speaking, writing, or comprehension, our approach ensures faster progress and a deeper understanding. Avail our service to unlock new opportunities and gain the confidence to communicate effectively in any setting.
                        </p>
                        <ul>
                        <li>+ Language Learning Expertise</li>
                          <li>+ Personalized Education Solutions</li>
                          <li>+ English Language Proficiency Development</li>
                          <li>+ Innovative Learning Tools</li>
                          <li>+ Tailored Learning Approach</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/esl-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>See more
                            <br />
                            details <i className="fa-solid fa-arrow-right"></i>
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
                          Web & Mobile Development
                        </h2>
                        <p>
                        At TopTier Digital Solutions, we specialize in creating user-friendly, high-performing websites and mobile applications tailored to your business needs. 
                        Our expert team combines the latest technologies with innovative design to deliver seamless, responsive, and scalable solutions. 
                        Whether you're launching a new site or enhancing an existing app, we ensure an exceptional user experience across all devices. 
                        Partner with us to bring your digital vision to life and stay ahead in a fast-evolving market.
                        </p>
                        <ul>
                          <li>+ Web Development Expertise</li>
                          <li>+ Mobile App Development</li>
                          <li>+ Responsive Design</li>
                          <li>+ User Interface (UI) Design</li>
                          <li>+ User Experience (UX) Optimization</li>
                          <li>+ Full-Stack Development</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
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
                        Boost Your Brand with Expert Social Media Marketing
                        </h2>
                        <p>
                        At TopTier Digital Solutions, we specialize in creating impactful social media marketing strategies that elevate your brand and engage your audience. 
                        From crafting compelling content to targeted ad campaigns, we help you build a strong online presence. 
                        Our data-driven approach ensures that every post, tweet, and ad works towards driving traffic, increasing conversions, 
                        and fostering lasting relationships with your customers.
                        </p>
                        <ul>
                          <li>+ Social Media Strategy</li>
                          <li>+ Content Creation</li>
                          <li>+ Audience Targeting</li>
                          <li>+ Brand Awareness Boost</li>
                          <li>+ Engagement Optimization</li>
                          <li>+ Community Management</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
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
                        Exceptional Customer Support for Seamless Experiences
                        </h2>
                        <p>
                        At TopTier Digital Solutions, our customer support service is designed to provide exceptional care and quick solutions. 
                        We are committed to offering prompt, friendly, and effective assistance, ensuring your customers have a seamless experience. 
                        Our dedicated team handles inquiries with professionalism, enhancing customer satisfaction and loyalty.
                        </p>
                        <ul>
                          <li>+ Effective Communication</li>
                          <li>+ Problem Solving</li>
                          <li>+ Customer Relationship Management</li>
                          <li>+ Technical Support</li>
                          <li>+ Conflict Resolution</li>
                          <li>+ GMultichannel Support</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
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
                        Streamline Your Operations with Expert Business Automation
                        </h2>
                        <p>
                        At TopTier Digital Solutions, we help businesses optimize their operations with advanced automation solutions. 
                        By streamlining repetitive tasks and integrating smart workflows, we save time, reduce errors, and improve efficiency. 
                        Our tailored automation strategies empower your business to focus on growth while we handle the repetitive work.
                        </p>
                        <ul>
                          <li>+ Process Automation</li>
                          <li>+ Workflow Optimization</li>
                          <li>+ System Integration</li>
                          <li>+ Task Scheduling</li>
                          <li>+ Error Reduction</li>
                          <li>+ Efficiency Improvement</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/business-automation"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>See More
                            <br />
                            Information <i className="fa-solid fa-arrow-right"></i>
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

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Maximize Your Reach with Targeted Paid Ads
                        </h2>
                        <p>
                        At TopTier Digital Solutions, we specialize in creating effective paid ad campaigns across multiple platforms, including Google Ads, Facebook, Instagram, LinkedIn, and more. Our data-driven approach ensures that your ads reach the right audience, driving conversions and boosting ROI. With our expertise, you can leverage the power of paid ads to grow your business and stand out in a competitive market.
                        </p>
                        <ul>
                          <li>+ Google Ads Management</li>
                          <li>+ Social Media Ads</li>
                          <li>+ Audience Targeting</li>
                          <li>+ Conversion Optimization</li>
                          <li>+ Campaign Analysis</li>
                          <li>+ ROI Tracking</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
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
