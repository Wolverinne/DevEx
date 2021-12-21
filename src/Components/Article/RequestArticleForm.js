import React from "react";
import classes from "./RequestArticleForm.module.css";
import { FaPaperPlane } from "react-icons/fa";
const RequestArticleForm = () => {
  return (
    <div className="container mt-4">
      <h4 className={classes.header}>Whose Experience you wanna know</h4>
      <form className={classes.form}>
        <div className="d-inline-flex">
          <div className={`pe-3  ${classes.control}`}>
            <label htmlFor="text">Your Name</label>
            <input
              type="text"
              required
              id="text"
              size="35"
              placeholder="Enter Your Name"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Senior's Name</label>
            <input
              type="text"
              required
              id="name"
              size="35"
              placeholder="Enter Your Senior's Name"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Company Name</label>
          <input
            type="text"
            required
            id="address"
            placeholder="Enter your Company's Name"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email(for Verification)</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Personal Notes</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder="Enter Your Personal Note(optional)"
          ></textarea>
        </div>
        <div className={`mb-3 ${classes.actions}`}>
          <button className="d-flex mx-auto align-items-center">
            <div>
              <p className={classes.submit_text}>Submit</p>
            </div>
            <div className="pb-1 ps-1">
              <span className={classes.icon}>
                <FaPaperPlane />
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestArticleForm;
