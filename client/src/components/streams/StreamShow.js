import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions';

const StreamShow = ({ fetchStream, stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    fetchStream(stream.id);
  }, [fetchStream, stream.id]);

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
