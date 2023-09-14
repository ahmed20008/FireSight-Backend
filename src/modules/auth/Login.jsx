import React, { useState, useRef, useEffect } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';

const Login = () => {

  return (
    <>
      <div className="auth-card">
        <div className="card">
          <div className="login">
            <h2 className='text-center mb-4'>Login</h2>
            <p className='text-center mb-4'>Hey, Enter your details to get sign in to your account.</p>
          </div>
          <div className="login-inputs">
            <form>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Enter Email" required />
                  <div className="invalid-feedback">
                    Enter Email
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
                  <div className="invalid-feedback">
                    Enter Password
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <button className="btn btn-primary w-100" type="submit">Sign in</button>
              </div>
            </form>
            <div className='text-center'>
              <p>Don't have an account? <Link to="/register" className='fw-bold'>Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout(Login); 