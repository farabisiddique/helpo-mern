import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviewHeadlineCont">
        <p className="mb-0 pb-0 fontInter">Customer Testimonials</p>
        <h1 className="fontInter">What They Have To Say</h1>
      </div>
      <div className="reviewCont">
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item reviewItem active">
              <div className="container-fluid">
                <div className="row d-flex justify-content-evenly">
                  {/* First Testimonial */}
                  <div className="col-md-3">
                    <div className="testimonial-item">
                      <div className="profile-info d-flex">
                        {/* Profile Image on the left */}
                        <img src={`${process.env.PUBLIC_URL}/assets/reviewer1.jpg`} alt="Profile" />
                        {/* Name, Designation, and Star Rating on the right */}
                        <div className="profile-info-text">
                          <h5>Matt Johnson</h5>
                          <p>Director</p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial text */}
                      <p className="testimonial-text">
                        "Exceptional craftsmanship, top-notch professionalism, and seamless project management. HELPO exceeded all our expectations."
                      </p>
                    </div>
                  </div>
                  {/* Second Testimonial */}
                  <div className="col-md-3">
                    <div className="testimonial-item">
                      <div className="profile-info d-flex">
                        <img src={`${process.env.PUBLIC_URL}/assets/reviewer2.jpg`} alt="Profile" />
                        <div className="profile-info-text">
                          <h5>Sarah West</h5>
                          <p>Project Manager</p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-text">
                        "Exceptional craftsmanship, top-notch professionalism, and seamless project management. HELPO exceeded all our expectations."
                      </p>
                    </div>
                  </div>
                  {/* Third Testimonial */}
                  <div className="col-md-3">
                    <div className="testimonial-item">
                      <div className="profile-info d-flex">
                        <img src={`${process.env.PUBLIC_URL}/assets/reviewer3.jpg`} alt="Profile" />
                        <div className="profile-info-text">
                          <h5>Joe Wallace</h5>
                          <p>Senior Manager</p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-text">
                        "Exceptional craftsmanship, top-notch professionalism, and seamless project management. HELPO exceeded all our expectations."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more carousel items as needed */}
            <div className="carousel-item reviewItem">
              <div className="container-fluid">
                <div className="row d-flex justify-content-evenly">
                  {/* Another Testimonial */}
                  <div className="col-md-3">
                    <div className="testimonial-item">
                      <div className="profile-info d-flex">
                        <img src={`${process.env.PUBLIC_URL}/assets/reviewer1.jpg`} alt="Profile" />
                        <div className="profile-info-text">
                          <h5>Matt Johnson</h5>
                          <p>Director</p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-text">
                        "Exceptional craftsmanship, top-notch professionalism, and seamless project management. HELPO exceeded all our expectations."
                      </p>
                    </div>
                  </div>
                  {/* More Testimonials */}
                  {/* Repeat structure for additional testimonials */}
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev revSlidePrev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon revSlidePrevIcon" aria-hidden="true">
              <i className="bi bi-chevron-left"></i>
            </span>
          </button>
          <button className="carousel-control-next revSlideNext" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon revSlideNextIcon" aria-hidden="true">
              <i className="bi bi-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
