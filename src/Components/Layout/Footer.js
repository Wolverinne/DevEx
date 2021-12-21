import { FaBook } from "react-icons/fa";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={`w-100 ${classes.footer}`}>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h3 className={`mb-0 pt-2 fw-bold ${classes.footer_heading}`}>
          Reach us directly on:
        </h3>
        <div className="footer-social-icons d-flex justify-content-center w-75">
          <a href="" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="DevEx Gmail"
              className={classes.footer_icon}
            />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"
              alt="DevEx Instagram"
              className={classes.footer_icon}
            />
          </a>
        </div>
        <div className="policy d-flex">
            <p className={`mt-2 ${classes.footer_text}`}> Read our <span className={classes.footer_policy}>Privacy Policy</span> Here  <FaBook /></p>
            
        </div>
        <div className={`mt-0 pb-0 ${classes.app_version}`}>
            <p className={`mb-0 px-2 py-1 ${classes.app_version_text}`}>App Version : DE-1</p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
 