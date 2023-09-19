import React, { useState } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';

const Login = () => {

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    // signIn({ ...credential })
    //   .then((response) => {
    //     const authUser = response.data.user;

    //     let isAuthCookiesSet = setAuthCookie({
    //       token: response.data.auth_token,
    //       expiresIn: response.data.exp,
    //       tokenType: "Bearer",
    //       authState: {},
    //     });

    //     if (isAuthCookiesSet) {
    //       navigate("/dashboard");
    //     } else {
    //       toastrOnTopCenter("Something went wrong, try later", "error");
    //     }
    //   })
    //   .catch((errors) => {
    //     setErrorBag(errors);
    //   })
    //   .finally(() => {
    //     setProcessing(false);
    //   });
  }

  return (
    <div className="row py-5">
      <div className="col-md-12 my-auto">
        <div className="auth-card">
          <div className="card">
            <div className="login">
              <h2 className='text-center mb-4'>Login</h2>
              <p className='text-center mb-4'>Hey, Enter your details to get sign in to your account.</p>
            </div>
            <div className="login-inputs">
              <form onSubmit={login}>
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <input
                      className="form-control"
                      type="email"
                      value={credential.email}
                      onChange={(e) => setCredential({ ...credential, email: e.target.value })}
                      placeholder="Enter Email"
                      required />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={credential.password}
                      onChange={(e) => setCredential({ ...credential, password: e.target.value })}
                      placeholder="Enter Password"
                      required />
                    <div className="invalid-feedback">
                      Enter Password
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <button className="btn text-white w-100" style={{ backgroundColor: '#f4813f' }} type="submit">
                    Sign In
                  </button>
                </div>
              </form>
              <div className='text-center'>
                <p>Don't have an account? <Link to="/register" className='fw-bold'>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout(Login); 