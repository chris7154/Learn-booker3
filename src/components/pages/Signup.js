import React from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import { useState } from "react";

export default function (props) {
    const navigate = useNavigate ()
    let [authMode, setAuthMode] = useState("Signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
          <div className="Signup-form-container">
            <form className="Sign-form">
                <div className="Sign-form-content">
                    <h3 className="Sign-form-title">Sign In</h3>
                    <div className="text-center">
                        Not registered yet? { " "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input 
                          type="email"
                          className="form-control mt-1"
                          placeholder="Enter email"

                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password</a>
                    </p>
                </div>
            </form>
          </div>
        )
    }
    
     return(
        <div className="Signup-form-container">
            <form className="Signup-form">
                <div className="Signup-form-content">
                    <h3 className="Signup-form-title">Sign in</h3>
                    <div className="text-center">
                        Already registered? {" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                        
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input 
                           type="Name"
                           className="form-control mt-1"
                           placeholder="e.g jane Doe"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <label>Email address</label>
                        <input 
                          type="email"
                          className="form-control mt-1"
                          placeholder="Email Address"

                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input 
                          type="password"
                          className="form-control mt-1"
                          placeholder="password"

                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        forgot <a href="#">Password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}