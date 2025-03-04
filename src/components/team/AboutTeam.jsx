import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team1 from "../../../public/assets/imgs/team/Aileeah Lozada.png";
import Team2 from "../../../public/assets/imgs/team/Airon Leysa.png";
import Team3 from "../../../public/assets/imgs/team/Byrone Boongaling.png";
import Team4 from "../../../public/assets/imgs/team/Christian Flores.png";
import Team5 from "../../../public/assets/imgs/team/Joel Banasihan.png";
import Team6 from "../../../public/assets/imgs/team/Leoj Catapang.png";
import Team7 from "../../../public/assets/imgs/team/LJ Deguzman.png";
import Team8 from "../../../public/assets/imgs/team/Michaela Rosales.png";
import Team9 from "../../../public/assets/imgs/team/Ulyssis Cus.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const AboutTeam = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
      const target = e.target;
      let tHero = gsap.context(() => {
        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(
            team_cursor,
            {
              opacity: 1,
              ease: "power4.out",
            },
            "-=0.3"
          );
        } else {
          t2.to(
            team_cursor,
            {
              opacity: 0,
              ease: "power4.out",
            },
            "-=0.3"
          );
        }
      });
      return () => tHero.revert();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Our Team</h2>
          <h3 className="sec-title title-anim">How we work</h3>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team1}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Aileeah Lozada</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Airon Leysa</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Byrone Boongaling</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team4}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Christian Flores</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team5}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Joel Banasihan</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team6}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Leoj Catapang</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team7}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">LJ Deguzman</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team8}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Michaela Rosales</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team9}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Ulyssis Cus</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team4}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Hardiya Kethrine</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Saymon D. Halk</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Jassica Oliver</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
