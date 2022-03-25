import React, { useState } from "react";
import axios from "axios";

const PluginUploadForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [version, setVersion] = useState("");
  const [plugin, setPlugin] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const formData = new FormData();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    formData.append("name", name);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("details", details);
    formData.append("version", version);
    formData.append("plugin", plugin);
    formData.append("image", image);

    axios
      .post(
        "https://pacific-depths-54362.herokuapp.com/api/v1/plugins",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setName("");
        setAuthor("");
        setDescription("");
        setDetails("");
        setImage("");
        setPlugin("");
        setVersion("");
        document.getElementById("plugin").value = "";
        document.getElementById("image").value = "";
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="upload-plugin-section">
      <div className="upload-pulgin-container">
        <form onSubmit={handleSubmit} className="upload-plugin-form">
          <span>{loading ? "loading..." : null}</span>
          <label className="input-label">Name</label>
          <input
            type="text"
            value={name}
            placeholder="enter plugin name"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label className="input-label">Author</label>
          <input
            type="text"
            value={author}
            placeholder="enter plugin author"
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
          <label className="input-label">Description</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="enter plugin description"
          />
          <label className="input-label">Details</label>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="enter plugin details"
          />
          <label className="input-label">Version</label>
          <input
            type="text"
            value={version}
            placeholder="enter plugin version"
            onChange={(event) => setVersion(event.target.value)}
            required
          />
          <label className="input-label">Plugin</label>
          <input
            accept=".zip"
            type="file"
            id="plugin"
            required
            onChange={(event) => setPlugin(event.target.files[0])}
          />
          <label className="input-label">Cover Image</label>
          <input
            accept="image"
            type="file"
            id="image"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
          <button className="plugin-download-button">Enter</button>
        </form>
      </div>
    </section>
  );
};

export default PluginUploadForm;
