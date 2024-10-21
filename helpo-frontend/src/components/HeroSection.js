import React from 'react';

const HeroSection = () => {
    return (
        <div className="heroSection p-0 m-0">
            <form>
                <div className="input-group mb-3 searchFieldCont">
                    <input
                        type="text"
                        className="form-control searchField"
                        placeholder="Ask for Help"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text searchIconCont" id="basic-addon2">
                        <i className="bi bi-search mx-auto"></i>
                    </span>
                </div>
            </form>
            <div className="homePageIntro fontInter">
                Connecting Seekers And Helpers Across The World
            </div>
            <div className="homePageTagline fontInter">
                A better approach to assisting people, empowering individuals to find opportunities
            </div>
            <div className="twoHelpBtn">
                <button className="btn helpBtn fontInter whiteBtn">I Want To Help</button>
                <button className="btn helpBtn fontInter blackBtn">I Need Help</button>
            </div>
        </div>
    );
};

export default HeroSection;
