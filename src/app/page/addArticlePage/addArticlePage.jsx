import React from 'react';

const AddArticlePage = () => {
  return (
    <div className="container is-max-desktop box">
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea is-large"
            placeholder="Textarea"
            rows="12"
          ></textarea>
        </div>
      </div>
      <div className="file has-name block">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose an image</span>
          </span>
          <span className="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
        </label>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Add</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddArticlePage;
