import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const LoginModal = ({ showLoginModal, loginModalClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // useNavigate hook to navigate to different routes
    const [profileData, setProfileData] = useState(null);

    const getProfile = async () => {
        try {
          const token = localStorage.getItem('token');  // Assuming the JWT is stored in local storage
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
      
          const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/profile`, config);

          setProfileData(data.result);  // Set profile data
          navigate('/profile', { state: { profileData: data.result } });  // Pass data using state

        } catch (error) {
          console.error('Error fetching profile:', error.response.data.message);
        }
    };

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Make POST request to backend login route
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });

            console.log(data);

            // Handle successful login (store token in localStorage or context)
            
            toastr.success('Login successful!', 'Success', {
                closeButton: true,
                progressBar: true,
                timeOut: 3000, // Time in milliseconds (3 seconds)
                onHidden: function () {
                  localStorage.setItem('token', data.token);
                  getProfile();
                },
            });

            // Close login modal after success
            
            // Optionally: Reload page or navigate to a different route
            // window.location.reload(); 
            
        } catch (error) {
            toastr.error('Invalid email or password');
        }
    };


    if (!showLoginModal) return null;
    return (
        <div
            className="modal fade show"
            style={{ display: 'block' }}
            id="loginModal"
            tabIndex="-1"
            aria-modal="true"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body p-4 position-relative">
                        <div className="row loginModalRow">
                            <div className="col-md-5 p-0">
                                <h2 className="mt-4">Welcome To Helpo!</h2>
                                <p>Welcome Back! Please enter your details.</p>

                                <form className="mt-5" onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control loginModalInput"
                                            id="lemail"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control loginModalInput"
                                            id="lpass"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-5 text-end">
                                        <a href="#" className="text-decoration-none text-dark">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 loginSubmtBtn">
                                        Log In
                                    </button>
                                </form>

                                <div className="login-options">
                                    <span>Or Log In Using</span>
                                </div>

                                <div className="container text-center">
                                    {/* Google Login Button */}
                                    <button className="btn btn-outline-secondary btn-block d-flex align-items-center justify-content-center mb-3">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                            alt="Google Icon"
                                            className="me-2"
                                            width="20"
                                            height="20"
                                        />
                                        Continue with Google
                                    </button>

                                    {/* Apple Login Button */}
                                    <button className="btn btn-dark btn-block d-flex align-items-center justify-content-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                            alt="Apple Icon"
                                            className="me-2"
                                            width="20"
                                            height="20"
                                        />
                                        Continue With Apple
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 position-relative">
                                <img src={`${process.env.PUBLIC_URL}/assets/loginModalImage.jpeg`} className="loginModalImage w-100" alt="Login Visual" />
                                <div className="loginModalEngTxt">
                                    <h2>Seeking Help</h2>
                                    <h2>Just Got Easier</h2>
                                    <p>&#10003;&nbsp;Over 25,000 people asked for help</p>
                                    <p>&#10003;&nbsp;Access Millions of Talents and Business across the Globe</p>
                                    <p>&#10003;&nbsp;We have over 300 Categories</p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-close loginModalCloseBtn"
                            onClick={loginModalClose} // Call the close function when the button is clicked
                            aria-label="Close"
                        >
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
