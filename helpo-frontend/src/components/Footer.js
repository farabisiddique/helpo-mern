import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoPartFooter">
        <a className="navbar-brand text-light companyName fontInter" href="/">
          HELPO
        </a>
      </div>
      <div className="menuPartFooter">
        <div className="container d-flex justify-content-evenly">
          <div className="footerMenu">
            <h5>For Seekers</h5>
            <p><a href="#">How to Hire</a></p>
            <p><a href="#">Helper Marketplace</a></p>
            <p><a href="#">Project Catalog</a></p>
            <p><a href="#">Contract-to-Hire</a></p>
            <p><a href="#">Direct Contracts</a></p>
            <p><a href="#">Hire Worldwide</a></p>
            <p><a href="#">Hire in the USA</a></p>
          </div>

          <div className="footerMenu">
            <h5>For Helpers</h5>
            <p><a href="#">How to Find Help</a></p>
            <p><a href="#">Direct Contracts</a></p>
            <p><a href="#">Find Help Worldwide</a></p>
            <p><a href="#">Find Help in the USA</a></p>
          </div>

          <div className="footerMenu">
            <h5>Resources</h5>
            <p><a href="#">Help & Support</a></p>
            <p><a href="#">Success Stories</a></p>
            <p><a href="#">Helpo Reviews</a></p>
            <p><a href="#">Resources</a></p>
            <p><a href="#">Blog</a></p>
            <p><a href="#">Community</a></p>
          </div>

          <div className="footerMenu">
            <h5>Company</h5>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Leadership</a></p>
            <p><a href="#">Investor Relations</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Our Impact</a></p>
            <p><a href="#">Press</a></p>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Trust, Safety & Security</a></p>
          </div>
        </div>
      </div>
      <div className="socialPartFooter">
        <div className="p-0 m-0 socialBoxCont">
          <div><h3>Follow Us</h3></div>
          <a href="#" className="socialBox">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="socialBox">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="socialBox">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
