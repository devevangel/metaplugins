import React from "react";

import "../../index.css";
import "./adminPage.css";

const AdminPage = () => {
  return (
    <div>
      <section className="nav-search-section">
        <div className="search-bar-container">
          <input
            className="plugin-search-input"
            type="text"
            placeholder="Search for a plugin"
          />
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
