import React from 'react';

const Commitment = () => {
  return (
    <div className="commitment">
      <div className="commitmentTextCont">
        <h1 className="fontInter text-light">Our Commitment</h1>
        <h1 className="fontInter text-light">To Clients</h1>
        <p className="fontInter text-light commitmentText">
          To our esteemed clients: Leverage this vast network of independent talents to innovate faster and revolutionize your business. To our cherished talents: Recognize that you're an invaluable cog in someone's machinery, driving them towards their dreams. At HELPO, we’re not just a platform, we’re a community.
        </p>
      </div>
      <div className="commitmentImgCont">
        <img src={`${process.env.PUBLIC_URL}/assets/commitment-lady.png`} className="w-100 h-100" alt="Commitment" />
      </div>
    </div>
  );
};

export default Commitment;
