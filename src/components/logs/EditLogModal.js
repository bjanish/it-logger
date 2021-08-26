import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
// AddLogModal component
const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please enter a message and tech',
        classes: '#c62828 red darken-3 rounded',
      });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(updatedLog);
      M.toast({
        html: `Log updated by ${tech}`,
        classes: 'blue darken-3 rounded',
      });
      // Clear fields
      setMessage('');
      setTech('');
      setAttention(false);

      // Close modal
      M.Modal.getInstance(document.querySelector('#edit-log-modal')).close();
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            Select Technician
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={() => {
              onSubmit();
            }}
            className="modal-close btn waves-effect blue-grey lighten-4"
          >
            Cancel
          </a>{' '}
          <a
            href="#!"
            onClick={() => {
              onSubmit();
            }}
            className="modal-close btn waves-effect blue"
          >
            Enter
            <i className="material-icons right">send</i>
          </a>
        </div>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(mapStateToProps, { updateLog })(EditLogModal);
