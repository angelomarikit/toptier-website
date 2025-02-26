import { Modal } from "react-bootstrap";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";

const JobDetailsModal1 = ({ modal1, setModal1, setModal2 }) => {
  const applyClose = () => {
    setModal1(false);
  };
  const applyTrigger = () => {
    setModal2(true);
  };
  return (
    <>
      <Modal
        show={modal1}
        onHide={applyClose}
        backdrop="static"
        keyboard={false}
        className="modal-show modal__application"
        id="application_form"
      >
        <div className="modal__apply">
          <button
            onClick={applyClose}
            className="modal__close-2"
            id="apply_close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="form-top">
            {/* <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={LogoBlack}
              alt="Site logo"
            /> */}
            <h2 className="sec-title">English Second Language Teacher</h2>
            <p>Full time</p>
          </div>
          <div className="form-apply">
            <form action="#">
              <div className="input-apply">
                <p>
                  Why you decided to apply here and why should we select you? *
                </p>
                <textarea name="question" required></textarea>
              </div>
              <div className="input-apply">
                <p>
                Can you tell us about your experience teaching English as a second language and the types of students you have worked with
                </p>
                <textarea name="question-2" required></textarea>
              </div>
              <div className="input-apply">
                <p>What strategies do you use to engage students with varying levels of English proficiency?</p>
                <textarea name="question-3" required></textarea>
              </div>
              <div className="input-apply">
                <p>
                How do you assess a student’s progress and determine their learning needs?
                </p>
                <textarea name="question-5" required></textarea>
              </div>
              <div className="input-apply">
                <p>How do you create a positive and inclusive classroom environment, especially when teaching students from different cultural backgrounds?*</p>
                <textarea name="question-6" required></textarea>
              </div>
              <div className="input-apply">
                <p>What makes you angry? and what makes you smile?</p>
                <textarea name="question-7" required></textarea>
              </div>
              <div className="input-apply">
                <p>
                  Your current salary & what are your salary expectations? *
                </p>
                <textarea name="question-8" required></textarea>
              </div>
            </form>
          </div>

          <div className="form-btn apply-trigger">
            <button onClick={applyTrigger} className="wc-btn-primary btn-hover">
              <span></span> next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobDetailsModal1;
