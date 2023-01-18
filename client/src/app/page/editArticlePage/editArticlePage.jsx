import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import TextField from '../../components/common/form/textField';
import TextAreaField from '../../components/common/form/textAreaField';
import { useHistory, useParams } from 'react-router-dom';
import { getArticleById } from '../../store/articles';
import Loader from '../../layouts/loader';
import { validator } from '../../utils/validator';

const EditArticlePage = () => {
  const history = useHistory();
  const { articleId } = useParams();
  const article = useSelector(getArticleById(articleId));
  const [data, setData] = useState({
    title: '',
    description: '',
    content: ''
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (article) {
      setData({
        title: article.title,
        description: article.description,
        content: article.content
      });
    }
  }, [article]);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data
    };
    console.log(newData);
    // dispatch(signUp(newData));
  };

  const handleCancel = () => {
    history.goBack();
  };

  const validatorConfig = {
    title: {
      isRequired: {
        message: "Title can't be empty"
      }
    },
    description: {
      isRequired: {
        message: "Description can't be empty"
      },
      min: {
        message: 'Description must be at least 3 characters long',
        value: 3
      },
      max: {
        message: 'Description must have a maximum of 300 characters',
        value: 300
      }
    },
    content: {
      isRequired: {
        message: "Content can't be empty"
      },
      min: {
        message: 'Content must be at least 20 characters long',
        value: 20
      }
    }
  };

  if (!article) return <Loader />;
  return (
    // <div className="tile-is-ancestor">
    //   <div className="tile is-parent box">
    //     <div className="tile is-child">
    //       <div className="content">
    //         <label className="label">Title</label>
    //         <TextField
    //           label="Title"
    //           name="title"
    //           value={data.title}
    //           onChange={handleChange}
    //           error={errors.title}
    //         />
    //         <label className="label">Description</label>
    //         <TextField
    //           label="Description"
    //           name="description"
    //           value={data.description}
    //           onChange={handleChange}
    //           error={errors.description}
    //         />
    //         <TextAreaField
    //           label="Content"
    //           name="content"
    //           value={data.content}
    //           onChange={handleChange}
    //           error={errors.content}
    //           rows="14"
    //         />
    //         <div className="file has-name block">
    //           <label className="file-label">
    //             <input className="file-input" type="file" name="resume" />
    //             <span className="file-cta">
    //               <span className="file-icon">
    //                 <i className="fas fa-upload"></i>
    //               </span>
    //               <span className="file-label">Choose an image</span>
    //             </span>
    //             <span className="file-name">
    //               Screen Shot 2017-07-29 at 15.54.25.png
    //             </span>
    //           </label>
    //         </div>
    //         <div className="field is-grouped">
    //           <div className="control">
    //             <button className="button is-link" onClick={handleSubmit}>Save</button>
    //           </div>
    //           <div className="control">
    //             <Link className="button is-link is-light">Cancel</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="hero is-fullheight">
        <div className="hero is-small has-background-primary-light">
          <section className="section">
            <h1 className="title is-size-2 has-text-grey">Edit article</h1>
          </section>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container">
              <label className="label">Title</label>
              <TextField
                label="Title"
                name="title"
                value={data.title}
                onChange={handleChange}
                error={errors.title}
              />
              <TextAreaField
                label="Description"
                name="description"
                value={data.description}
                onChange={handleChange}
                error={errors.description}
                rows="3"
              />
              <TextAreaField
                label="Content"
                name="content"
                value={data.content}
                onChange={handleChange}
                error={errors.content}
                rows="20"
              />
              <div className="field is-grouped is-justify-content-center">
                <div className="control">
                  <button className="button is-link" onClick={handleSubmit}>
                    Save
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-link is-light"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditArticlePage;
