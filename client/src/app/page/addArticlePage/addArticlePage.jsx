import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextAreaField from '../../components/common/form/textAreaField';
import TextField from '../../components/common/form/textField';
import { validator } from '../../utils/validator';
import { postArticle } from '../../store/articles';
import { useHistory } from 'react-router-dom';
import { getCurrentUserId } from '../../store/users';

const AddArticlePage = () => {
  const currUserId = useSelector(getCurrentUserId());
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: '',
    description: '',
    content: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
      userId: currUserId,
      image: ''
    };

    dispatch(postArticle(newData));
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
        message: 'Description must have a maximum of 500 characters',
        value: 500
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
  const isValid = Object.keys(errors).length === 0;
  return (
    <section className='section mt-6'>
      <div className="hero is-fullheight">
        <div className="hero is-small has-background-primary-light">
          <section className="section">
            <h1 className="title is-size-2 has-text-grey">New article</h1>
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
                  <button
                    className="button is-link"
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Add
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
    </section>
  );
};

export default AddArticlePage;
