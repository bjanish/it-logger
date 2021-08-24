import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

// AddLogModal component
const AddLogModal = () => {
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
      console.log(message, attention, tech);
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
              setMessage('');
              setTech('');
              setAttention(false);
            }}
            className="modal-close btn waves-effect blue-grey lighten-4"
          >
            Cancel
          </a>{' '}
          <a
            href="#!"
            onClick={() => {
              console.log('Add Log');
              onSubmit();
              setMessage('');
              setTech('');
              setAttention(false);
            }}
            className="modal-close btn waves-effect blue"
          >
            Enter
            <i class="material-icons right">send</i>
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
};

export default AddLogModal;
