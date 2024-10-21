import React from 'react';

const Community = () => {
  return (
    <div className="community">
      <div className="communityTextCont">
        <h1 className="fontInter">We Believe In Building</h1>
        <h1 className="fontInter">Stronger Community</h1>
        <p className="fontInter">
          To our esteemed clients: Embrace the power of HELPO's vast network of independent talents to drive innovation and revolutionize your business. 
          By tapping into this community, you can access a pool of skilled professionals that enable you to adapt and grow faster in an ever-changing market.
          <br />
          <br />
          To our cherished talents: Recognize your indispensable role in the success of others. You are the force helping to turn dreams into reality, powering businesses forward. 
          At HELPO, we're not just a platform; we are a community built on collaboration, support, and shared success.
        </p>
        <button className="btn mt-4 fontInter blackBtn joinCommunityBtn">
          Join Our Community
        </button>
      </div>
      <div className="communityImgCont">
        <img src={`${process.env.PUBLIC_URL}/assets/community-image.png`} alt="Community" />
      </div>
    </div>
  );
};

export default Community;
