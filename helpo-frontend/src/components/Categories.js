import React from 'react';

const Categories = () => {
    return (
        <div className="categories">
            <div className="categoryHeadlineCont">
                <h1>We Elevate Work to New Heights</h1>
                <p>
                    We are privy to your vision, and every action of ours is directed towards<br />
                    helping you forge connections that metamorphose these visions into reality.<br />
                    Here, you build a reservoir of trustworthy collaborators.
                </p>
            </div>
            <div className="categorySliderCont">
                <div className="container my-5">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img src={`${process.env.PUBLIC_URL}/assets/sliderimg1.jpg`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img src={`${process.env.PUBLIC_URL}/assets/sliderimg2.jpg`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img src={`${process.env.PUBLIC_URL}/assets/sliderimg3.jpg`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img src={`${process.env.PUBLIC_URL}/assets/sliderimg4.jpg`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img
                                                src="https://via.placeholder.com/300x200"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img
                                                src="https://via.placeholder.com/300x200"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card catSlideCard">
                                            <img
                                                src="https://via.placeholder.com/300x200"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem Ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="catSlidePrev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="catSlidePrevIcon" aria-hidden="true">
                            <i className="bi bi-arrow-left-circle"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </div>
                    <div
                        className="catSlideNext"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="catSlideNextIcon" aria-hidden="true">
                            <i className="bi bi-arrow-right-circle"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
