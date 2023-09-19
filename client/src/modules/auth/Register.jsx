import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layout/AuthLayout';
import '../../assets/css/Register.css';
import UserInfo from './component/UserInfo';

const Register = () => {

  const [user, setUser] = useState({});

  const buildSignupData = () => {
    return {
      name: user?.name,
      phone: user?.phone,
      email: user?.email,
      password: user?.password,
      password_confirmation: user?.password_confirmation,
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    const data = buildSignupData();
  }

  return (
    <div className="row">
      <div className="col-md-12 py-5">
        <div className="auth-card-register">
          <div className="card">
            <div className="register">
              <h2 className='text-center mb-4'>Register</h2>
              <p className='text-center mb-4'>Hey, Enter your details to get signed up to your account.</p>
            </div >
            <div className="register-inputs">
              <form onSubmit={createAccount}>
                <UserInfo onChange={setUser} />
                <div className="col-md-12 mb-3">
                  <button className="btn btn-primary w-100" type='submit'>
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
      </div>
    </div>
  )
}

export default AuthLayout(Register);