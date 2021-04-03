import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../actions';
import Modal from './Modal';
import history from '../history';

const StreamDelete = ({ fetchStream, deleteStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const renderContent = () => {
    if (!stream) {
      return 'Loading...';
    }
    return `Are you sure want to delete: ${stream.title} ?`;
  };

  const deleteAction = () => {
    deleteStream(match.params.id);
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={() => deleteAction()} className="ui negative button">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  return (
    <Modal
      content={renderContent()}
      header="Delete Stream"
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
