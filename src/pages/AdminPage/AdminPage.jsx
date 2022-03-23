import React, { useState } from "react";

import AdminForm from "../../components/AdminForm";
import PluginUploadForm from "../../components/PluginUploadForm";

import "../../index.css";
import "./adminPage.css";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

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

      {isAdmin ? <PluginUploadForm /> : <AdminForm setIsAdmin={setIsAdmin} />}
    </div>
  );
};

export default AdminPage;
