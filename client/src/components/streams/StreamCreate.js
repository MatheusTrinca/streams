import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = (props) => {
  const renderInput = ({ input, label }) => (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
    </div>
  );

  return (
    <form className="ui form">
      <Field name="title" component={renderInput} label="Enter the title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter the description"
      />
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
