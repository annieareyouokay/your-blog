import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../components/common/form/textField';
import TextAreaField from '../../components/common/form/textAreaField';
import { useHistory, useParams } from 'react-router-dom';
import { getArticleById, updateArticle } from '../../store/articles';
import Loader from '../../layouts/loader';
import { validator } from '../../utils/validator';

const EditArticlePage = () => {
  const dispatch = useDispatch();
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
        ...article
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
    dispatch(updateArticle(articleId, newData));
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
