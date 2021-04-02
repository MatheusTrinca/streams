import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

const StreamEdit = ({ fetchStream, editStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [match.params.id, fetchStream]);

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Edit a Stream</h2>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(stream, 'title', 'description')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
