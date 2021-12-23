import { useRef } from "react";
import React from "react";
import classes from "./WriteArticleForm.module.css";
import { FaPaperPlane } from "react-icons/fa";

function WriteArticleForm(props) {
    const titleInputRef = useRef();
    const companyNameInputRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredCompanyName = companyNameInputRef.current.value;
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const writeArticleData = {
        title: enteredTitle,
        companyName: enteredCompanyName,
        name: enteredName,
        email: enteredEmail,
        description: enteredDescription,
      };
      console.log(writeArticleData);
      //it is our prop which gets function as a value
      props.onAddWrite(writeArticleData);
    
  };
  return (
    <div className={"container"}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="d-inline-flex">
          <div className={`pe-3  ${classes.control}`}>
            <label htmlFor="text">Company Name</label>
            <input
              type="text"
              required
              id="text"
              size="35"
              ref={companyNameInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Your Name</label>
            <input type="text" required id="text" size="35" ref={nameInputRef} />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Email(for Verification)</label>
          <input type="text" required id="address" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Share Your Experience Here</label>
          <textarea
            id="description"
            required
            rows="8"
            ref={descriptionInputRef}
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
}

export default WriteArticleForm;
