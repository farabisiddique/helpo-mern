import React from 'react';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUsText">
                <h1 className="aboutUsHeadline fontInter">Get To Know Us</h1>
                <p className="aboutUsDesc fontInter">
                    HELPO was created with the vision of revolutionizing assistance by providing 
                    individuals with empowerment to find opportunities and offering businesses 
                    unmatched flexibility. The platform aims to bridge the gap between those 
                    in need of help and the resources or solutions they require, 
                    ultimately fostering a more collaborative and dynamic environment for both 
                    individuals and companies.
                    By focusing on empowerment and flexibility, HELPO likely emphasizes innovation 
                    in the ways people can access services or jobs, and how businesses can adapt to 
                    shifting demands, which is a growing necessity in today's dynamic global economy.
                </p>
                <button className="btn fontInter whiteBtn aboutUsDetailsBtn">
                    About Us
                </button>
            </div>
            <div className="aboutUsImgCont position-relative">
                <div className="aboutUsSampleIntroBox">
                    <p className="fontInter homepageSampleIntroText">
                        I am a Web Developer, helping others to meet their goals
                    </p>
                    <u className="fontInter helpedOthers">Helped Others</u>
                    <div className="followerStats">
                        <div className="fStatsEach">
                            <h6 className="fontInter p-0 m-0">300</h6>
                            <p className="fontInter p-0 m-0 fStatsSmall">People</p>
                        </div>

                        <div className="fStatsEach">
                            <h6 className="fontInter p-0 m-0">250</h6>
                            <p className="fontInter p-0 m-0 fStatsSmall">Reviews</p>
                        </div>

                        <div className="fStatsEach">
                            <h6 className="fontInter p-0 m-0">86%</h6>
                            <p className="fontInter p-0 m-0 fStatsSmall">Ratings</p>
                        </div>
                        <div className="fStatsEach fStatsProPicCont">
                            <img src="helperProPic.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="aboutUsSampleFollowerBox"></div>
            </div>
        </div>
    );
};

export default AboutUs;
