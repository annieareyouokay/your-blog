import React, { useState } from 'react';
import TextAreaField from '../../components/common/form/textAreaField';
import TextField from '../../components/common/form/textField';

const AddArticlePage = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    content: ''
  });
  const [errors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  return (
    <div className="container is-max-desktop box">
      <label className="label">Title</label>
      <TextField
        label="Title"
        name="title"
        value={data.title}
        onChange={handleChange}
        error={errors.title}
      />
      <label className="label">Description</label>
      <TextField
        label="Description"
        name="description"
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <TextAreaField
        label="Content"
        name="content"
        value={data.content}
        onChange={handleChange}
        error={errors.content}
        rows="14"
      />
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
