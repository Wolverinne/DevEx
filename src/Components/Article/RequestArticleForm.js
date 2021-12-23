import { useRef } from "react";
import classes from "./RequestArticleForm.module.css";
import { FaPaperPlane } from "react-icons/fa";

function RequestArticleForm(props) {
  const nameInputRef = useRef();
  const seniornameInputRef = useRef();
  const companynameInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSeniorName = seniornameInputRef.current.value;
    const enteredCompanyName = companynameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const requestArticleData = {
      name: enteredName,
      seniorName: enteredSeniorName,
      companyName: enteredCompanyName,
      email: enteredEmail,
      description: enteredDescription,
    };
    //it is our prop which gets function as a value
    props.onAddRequest(requestArticleData);
  }
  return (
    <div className="container mt-4">
      <h4 className={classes.header}>Whose Experience you wanna know</h4>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className="d-inline-flex">
          <div className={`pe-3  ${classes.control}`}>
            <label htmlFor="text">Your Name</label>
            <input
              type="text"
              required
              id="text"
              size="35"
              placeholder="Enter Your Name"
              ref={nameInputRef}
              // This ref prop will establish a connection with the useRef object through which we can get data from that input element.
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
              ref={seniornameInputRef}
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
            ref={companynameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email(for Verification)</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Your Email Address"
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Personal Notes</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder="Enter Your Personal Note(optional)"
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

export default RequestArticleForm;
