import React from "react";
import feedback_img from "../Components/Images/feedback-img.svg";
import { FaPaperPlane } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="container">
      <div className={`feedback_wrapper`}>
        <h1 className="p-1 feedback_title text-center">Feedback Form</h1>
      </div>
      <div>
        <h3 className="text-center feedback_text">
          Please provide your valuable feedback about what more features you
          want to be added, what all features you liked in the app, what are the
          areas of improvement and any feedback in general.
          <br />
          <br />
          <strong>Thank You.!</strong>
        </h3>
      </div>

      <div className="d-flex mt-4 justify-content-center align-items-center ">
        <div className="col-md-6 col-12 order-1">
          <img src={feedback_img} className="feedback_img" />
        </div>
        <div className="col-md-6 col-12 order-2">
          <form>
            <div className="control mt-1 p-1">
              <h2 className="feedback_form_text">Name:</h2>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter Your Name"
                size="25"
              />
            </div>

            <div className="control mt-1 p-1">
              <h2 className="feedback_form_text">Email:</h2>
              <input
                type="email"
                required
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="control mt-1 p-1">
              <h2 className="feedback_form_text">Feedback:</h2>
              <textarea
                id="feedback"
                required
                rows="3"
                placeholder="Provide your Feedback here"
              ></textarea>
            </div>
            <div className="actions p-1 w-100 mt-2 mb-4">
              <button type="submit" className="d-flex justify-content-center align-items-center">
                <p>Submit</p>
                <div className="ps-1 pb-1">
                    <span className="icon">
                      <FaPaperPlane />
                    </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
