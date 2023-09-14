import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layout/AuthLayout';
import '../../assets/css/Register.css';

const Register = () => {

  return (
    <>
      <div className="auth-card">
        <div className="card">
          <div className="register">
            <h2 className='text-center mb-4'>Register</h2>
            <p className='text-center mb-4'>Hey, Enter your details to get signed up to your account.</p>
          </div >
          <div className="register-inputs">
            <form>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    autoComplete="off"
                    placeholder="Username"
                    required />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <button className="btn btn-primary w-100">
                  Sign up
                </button>
              </div>
              <div className='text-center'>
                <p>Already have an account? <Link to="/login" className='fw-bold'>Sign in</Link></p>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  )
}

export default AuthLayout(Register);