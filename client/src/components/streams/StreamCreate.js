import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, label, meta: { error } }) => (
  <div className="field">
    <label>{label}</label>
    <input {...input} />
    <div>{error}</div>
  </div>
);

const onSubmit = (formValues) => {
  console.log(formValues);
};
const StreamCreate = (props) => {
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
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
  console.log(errors);
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
