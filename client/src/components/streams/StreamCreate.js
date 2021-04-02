import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions/index';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h2>Create a Stream</h2>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
