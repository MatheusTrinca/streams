import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../actions/index';

const renderError = ({ error, touched }) => {
  if (error && touched) {
    return (
      <div className="ui error messafe">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {renderError(meta)}
    </div>
  );
};

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter the title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter the description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
