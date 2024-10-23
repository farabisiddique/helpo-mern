import React, { useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


const SignUpModal = ({ showModal, handleClose }) => {
    

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Send POST request to the backend
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, formData);
          console.log("hey");
          toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
    
          if (response.status === 201) {
            // toastr.success('Signup successful!', 'Success');
            toastr.success('Signup successful!', 'Success', {
                closeButton: true,
                progressBar: true,
                timeOut: 3000, // Time in milliseconds (3 seconds)
                onHidden: function () {
                  localStorage.setItem('showLoginModalOnLoad', 'true');
                  window.location.reload(); // Reload the page
                },
            });
            
          }
        } catch (error) {
            toastr.error(error.response?.data?.message || 'Signup failed!', 'Error');
        }
    };

    if (!showModal) return null;

    return (
        <div
            className="modal fade show"
            style={{ display: 'block' }}
            id="signUpModal"
            tabIndex="-1"
            aria-labelledby="signUpModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body p-4 position-relative">
                        <div className="row signUpModalRow">
                            <div className="col-md-5 p-0">
                                <h2 className="mt-4">Create a new account</h2>
                                <p>
                                    Already have an account?{' '}
                                    <a href="#" className="text-decoration-none">
                                        Log In
                                    </a>
                                </p>

                                <form className="row mt-5" onSubmit={handleSubmit}>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control signUpModalInput"
                                            id="fname"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control signUpModalInput"
                                            id="lname"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="email"
                                            className="form-control signUpModalInput"
                                            id="sEmail"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="password"
                                            className="form-control signUpModalInput"
                                            id="sPass"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="rememberMe"
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember Me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 signUpSubmtBtn">
                                        Sign Up
                                    </button>
                                </form>

                                <div className="login-options mt-4">
                                    <span>Or Log In Using</span>
                                </div>

                                <div className="container text-center mt-3">
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
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/signupModalImage.png`}
                                    className="loginModalImage w-100"
                                    alt="Sign Up Visual"
                                />
                                <div className="signUpModalEngTxt">
                                    <h2>Collaboration In</h2>
                                    <h2>One Platform</h2>
                                    <p>&#10003;&nbsp;Over 25,000 people asked for help</p>
                                    <p>&#10003;&nbsp;Access Millions of Talents and Business across the Globe</p>
                                    <p>&#10003;&nbsp;We have over 300 Categories</p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-close loginModalCloseBtn"
                            onClick={handleClose} // Call the close function when the button is clicked
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

export default SignUpModal;
