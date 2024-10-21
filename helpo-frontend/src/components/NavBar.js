import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';


const Navbar = () => {
    const navigate = useNavigate();  // useNavigate hook to navigate to different routes
    const [profileData, setProfileData] = useState(null);

    const [showLoginModal, setShowLoginModal] = useState(false); 
    const loginModalOpen = () => setShowLoginModal(true); 
    const loginModalClose = () => setShowLoginModal(false); 

    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const handleShowSignUpModal = () => setShowSignUpModal(true);
    const handleCloseSignUpModal = () => setShowSignUpModal(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getProfile = async () => {
        try {
          const token = localStorage.getItem('token');  // Assuming the JWT is stored in local storage
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
      
          const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/auth/profile`, config);

          setProfileData(data.result);  // Set profile data
          navigate('/profile', { state: { profileData: data.result } });  // Pass data using state

        } catch (error) {
          console.error('Error fetching profile:', error.response.data.message);
        }
    };


    useEffect(() => {
        // Check if the signup was successful and the page was reloaded
        const shouldShowLoginModal = localStorage.getItem('showLoginModalOnLoad');
        if (shouldShowLoginModal === 'true') {
          setShowLoginModal(true); // Show the login modal
          localStorage.removeItem('showLoginModalOnLoad'); // Clear the flag
        }

        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token from localStorage
        setIsAuthenticated(false);  // Set the authentication state to false
        navigate('/');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent mainNav">
                <div className="container-fluid">
                    {/* Brand */}
                    <a className="navbar-brand text-light companyName fontInter" href="/">
                        HELPO
                    </a>

                    {/* Toggler/collapsible Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo"
                        aria-controls="navbarTogglerDemo"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                        {/* Left-aligned items */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        {/* Navbar links on the right */}
                        <ul className="navbar-nav ml-auto d-flex menuBar">
                            <li className="nav-item">
                                <a className="nav-link menuBarLink fontInter" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menuBarLink fontInter" href="#aboutUs">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menuBarLink fontInter" href="#contact">
                                    Contact
                                </a>
                            </li>

                            {isAuthenticated ? (
                                <>
                                    <li className="nav-item">
                                        <ul className="afterLoginItemCont">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link fontInter"
                                                    href="#wallet"
                                                    ><i className="bi bi-wallet2"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link fontInter"
                                                    href="#message"
                                                    ><i className="bi bi-chat-left-text-fill"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link fontInter"
                                                    href="#notification"
                                                    ><i className="bi bi-bell-fill"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item userProfileIcon">
                                                <a
                                                    className="nav-link fontInter"
                                                    href="#profile"
                                                    id="navbarDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    ><i className="bi bi-person-circle"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="navbarDropdown">
                                                    <li>
                                                        <a className="dropdown-item userProfileDropdownItem" href="#profile" onClick={getProfile}>
                                                            <i className="bi bi-window-sidebar"></i>
                                                            Dashboard
                                                        </a>
                                                    </li>
                                                    <li><hr className="dropdown-divider"></hr></li>
                                                    <li>
                                                        <a className="dropdown-item userProfileDropdownItem" href="#editprof">
                                                            <i className="bi bi-pencil-square"></i>
                                                            Edit profile
                                                        </a>
                                                    </li>
                                                    <li><hr className="dropdown-divider"></hr></li>
                                                    <li>
                                                        <a className="dropdown-item userProfileDropdownItem" href="#settings">
                                                            <i className="bi bi-gear-fill"></i>
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li><hr className="dropdown-divider"></hr></li>
                                                    <li>
                                                        <a className="dropdown-item userProfileDropdownItem" href="#changepass">
                                                            <i className="bi bi-key-fill"></i>
                                                            Change Password
                                                        </a>
                                                    </li>
                                                    <li><hr className="dropdown-divider"></hr></li>
                                                    <li>
                                                        <a className="dropdown-item userProfileDropdownItem" href="#logout" onClick={handleLogout}>
                                                            <i className="bi bi-box-arrow-right"></i>
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link menuBarLink fontInter"
                                            href='#'
                                            onClick={loginModalOpen} // Open modal on click
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="btn menuBarLink fontInter signUpBtnNav blackBtn"
                                            href="#signup"
                                            onClick={handleShowSignUpModal}
                                        >
                                            Sign Up
                                        </a>
                                    </li>
                                </>
                            )}

                            {/* If not logged in */}
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <LoginModal showLoginModal={showLoginModal} loginModalClose={loginModalClose} />
            <SignUpModal showModal={showSignUpModal} handleClose={handleCloseSignUpModal} />
        </>
        
    );
};

export default Navbar;
