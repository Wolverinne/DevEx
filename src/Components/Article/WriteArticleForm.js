import React from "react";
import classes from "./WriteArticleForm.module.css";
import bg_image from "../Images/bg_image.jpg";
import { FaPaperPlane } from "react-icons/fa";

const WriteArticleForm = () => {
  return (
    <div className={`container ${classes.logo}`}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" />
        </div>
        <div className="d-inline-flex">
          <div className={`pe-3  ${classes.control}`}>
            <label htmlFor="text">Company Name</label>
            <input type="url" required id="text" size="35" />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Your Name</label>
            <input type="url" required id="text" size="35" />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Email(for Verification)</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Share Your Experience Here</label>
          <textarea id="description" required rows="8"></textarea>
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

export default WriteArticleForm;
