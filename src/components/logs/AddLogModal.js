import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';

// AddLogModal component
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please enter a message and tech',
        classes: '#c62828 red darken-3 rounded',
      });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
      // Close Modal
      M.toast({
        html: 'Log added by ' + tech,
        classes: 'blue darken-3 rounded',
      });
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Juan">Juan</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Doe">Jane Doe</option>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};
const modalStyle = {
  width: '75%',
  height: '75%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
};

export default connect(null, { addLog })(AddLogModal);
