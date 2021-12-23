import { Link } from 'react-router-dom';
import React from 'react'
import Pic1 from './Images/Pic1.svg';
import classes from './IntroContent.module.css';

function IntroContent() {
    return (
    <div className={`col-12 order-md-2 order-1 col-md-7  text-align-center ${classes.intro_container}`}>
      {/* Carousel */}
      <div id="carouselExampleControls" className="carousel carousel-dark slide mh-25" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={classes.text}><img src={Pic1} className="d-block w-50 mx-auto" alt="..." /><p className={classes.caption}> Share your Interview Experience with others</p></div>
          </div>
          <div className="carousel-item">
          <div className="text"><img src={Pic1} className="d-block w-50 mx-auto" alt="..." /><p className={classes.caption}> Request others to share their encouters</p></div>
          </div>
          <div className="carousel-item">
          <div className="text"><img src={Pic1} className="d-block w-50 mx-auto" alt="..." /><p className={classes.caption}> Share your experience with others</p></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className={`pt-3 d-flex align-items-center justify-content-center flex-column ${classes.btns}`}>
      <Link to ='/write-article'><button className= {`mx-3 px-3 mb-2 hidden-md-down ${classes.navbtn_1}`}>Write Article</button></Link>  
      <Link to='/request-article'><button className={`mb-2 hidden-md ${classes.navbtn_2}`}>Request Article</button></Link>
      </div>

      <div className={`pt-3 px-3 text-center ${classes.intro_content}`}>
        DevEx is an Experience Sharing Platform for Developers to Read and Share their Interview Experiences.
      </div>
      

    </div>
  );
}

export default IntroContent
