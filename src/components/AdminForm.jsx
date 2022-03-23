import React, { useState } from "react";

const AdminForm = ({ setIsAdmin }) => {
  const [loginText, setLoginText] = useState("");

  const handleAdminLogin = (event) => {
    event.preventDefault();

    if (loginText === process.env.REACT_APP_ADMIN_PASSWORD) {
      setLoginText("");
      setIsAdmin(true);
    }
  };

  return (
    <section className="admin-password-section">
      <div className="admin-password-container">
        <form onSubmit={handleAdminLogin} className="admin-password-form">
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="enter password"
            value={loginText}
            onChange={(event) => setLoginText(event.target.value)}
          />
          <button className="plugin-download-button ">Enter</button>
        </form>
      </div>
    </section>
  );
};

export default AdminForm;
