import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation hook
import { Helmet } from 'react-helmet';
import '../styles/All.css';
import '../styles/Profile.css';
import Navbar from './NavBar';
import Footer from './Footer';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const location = useLocation();  // This will give access to the state passed in navigate
  const { profileData } = location.state || {};  // Destructure profileData from location state, handle null case

  if (!profileData) {
    return <div>Loading...</div>;  // Fallback if data isn't available yet
  }

//   console.log(profileData.firstName+" "+profileData.lastName);


  return (
    <div className="container-fluid p-0 mainDiv profilePageMainDiv">
        <Helmet>
            <title>Helpo Profile Page</title>
        </Helmet>
        <Navbar />
        <div className="profileDiv">
        <div className="profileTop">
            <img src={`${process.env.PUBLIC_URL}/assets/profCover.jpeg`} alt="Profile Cover" />
        </div>

        <div className="profileBottom">
            <div className="profilePane p-4">
            <div className="proPicInfoCont mt-5">
                <div className="proPic">
                <img src={`${process.env.PUBLIC_URL}/assets/propic.jpg`} alt="Profile" />
                <div className="profType p-3 pt-1 pb-1">Helper</div>
                </div>

                <h3 className="profName mt-5">{profileData.firstName+" "+profileData.lastName}</h3>
                <h5 className="profDsg mt-0">Full Stack Web Developer</h5>

                <div className="profRateReviewCont mt-0">
                <span>4.65</span>
                <span className="profRating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                </span>
                </div>

                <button className="btn btn-primary w-100 pt-2 pb-2 mt-3">Follow</button>
                <button type="button" className="btn btn-outline-dark w-100 pt-2 pb-2 mt-3">Message</button>

                <div className="profAboutMe mt-5">
                <h5>About Me</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.</p>
                </div>

                <table className="table mt-4 mb-4">
                <tbody>
                    <tr>
                    <td className="ps-0">Helped In</td>
                    <td className="text-end">100 Tasks</td>
                    </tr>
                    <tr>
                    <td className="ps-0">Sought</td>
                    <td className="text-end">100 Helps</td>
                    </tr>
                    <tr>
                    <td className="ps-0">Reviews</td>
                    <td className="text-end">100</td>
                    </tr>
                </tbody>
                </table>

                <div className="profSkills w-100">
                <h5 className="mb-3">Skills</h5>
                <span className="btn btn-outline-dark p-0 ps-3 pe-3 me-2 profSkillSpan">HTML</span>
                <span className="btn btn-outline-dark p-0 ps-3 pe-3 me-2 profSkillSpan">CSS</span>
                </div>

                <div className="profSocial w-100">
                <h5 className="mt-3 mb-3">Socials</h5>
                <div className="profSocialIconCont w-100">
                    <a href="#" className="profSocialBox">
                    <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="profSocialBox">
                    <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="profSocialBox">
                    <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div className="profileGallery ps-3 pt-3">
            <div className="nav nav-tabs border-0 profileTabBtnCont" id="myTab" role="tablist">
                <button
                className={`nav-link profileTabBtn ${activeTab === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleTabClick('portfolio')}
                >
                Portfolio
                </button>
                <button
                className={`nav-link profileTabBtn ${activeTab === 'helpdone' ? 'active' : ''}`}
                onClick={() => handleTabClick('helpdone')}
                >
                Help Done
                </button>
                <button
                className={`nav-link profileTabBtn ${activeTab === 'helpreceived' ? 'active' : ''}`}
                onClick={() => handleTabClick('helpreceived')}
                >
                Help Received
                </button>
            </div>

            <div className="tab-content" id="myTabContent">
                {activeTab === 'portfolio' && (
                <div className="tab-pane fade pt-3 show active" role="tabpanel">
                    <div className="container-fluid">
                    <div className="row mb-3 justify-content-between">
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                    </div>
                    <div className="row mb-3 justify-content-between">
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                    </div>
                    <div className="row mb-3 justify-content-between">
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                    </div>
                    <div className="row mb-3 justify-content-between">
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                        <div className="col-md-3 portfolioFrame"></div>
                    </div>
                    <div>Pagination</div>
                    </div>
                </div>
                )}

                {activeTab === 'helpdone' && (
                <div className="tab-pane fade pt-3" role="tabpanel">
                    Help Done
                </div>
                )}

                {activeTab === 'helpreceived' && (
                <div className="tab-pane fade pt-3" role="tabpanel">
                    Help Received
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default ProfilePage;
