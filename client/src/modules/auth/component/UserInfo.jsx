import React, { useEffect, useState } from 'react';

const UserInfo = ({ onChange }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    onChange({
      ...userInfo
    });
  }, [userInfo, onChange]);

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <input
          type="text"
          className="form-control"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          placeholder="Full Name"
          required
        />
      </div>
      <div className="col-md-6 mb-3">
        <input
          type="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>

      <div className="col-md-12 mb-3">
        <input
          type="tel"
          className="form-control"
          value={userInfo.phone}
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="col-md-12 mb-3">
        <input
          type="password"
          className="form-control"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          placeholder="Password"
          required
        />
      </div>
      <div className="col-md-12 mb-3">
        <input
          type="password"
          className="form-control"
          value={userInfo.password_confirmation}
          onChange={(e) => setUserInfo({ ...userInfo, password_confirmation: e.target.value })}
          placeholder="Confirm Password"
          required
        />
      </div>
    </div>
  )
}

export default UserInfo