import React from "react";

const PluginUploadForm = () => {
  return (
    <section className="upload-plugin-section">
      <div className="upload-pulgin-container">
        <form className="upload-plugin-form">
          <label className="input-label">Name</label>
          <input type="text" placeholder="enter plugin name" required />
          <label className="input-label">Author</label>
          <input type="text" placeholder="enter plugin author" required />
          <label className="input-label">Description</label>
          <textarea placeholder="enter plugin description" />
          <label className="input-label">Details</label>
          <textarea placeholder="enter plugin details" />
          <label className="input-label">Version</label>
          <input type="text" placeholder="enter plugin version" required />
          <label className="input-label">Plugin</label>
          <input accept=".zip" type="file" required />
          <label className="input-label">Cover Image</label>
          <input accept="image" type="file" required />
          <button className="plugin-download-button ">Enter</button>
        </form>
      </div>
    </section>
  );
};

export default PluginUploadForm;
