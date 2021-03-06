import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

// AddLogModal component
const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please enter the first and last name',
        classes: '#c62828 red darken-3 rounded',
      });
    } else {
      console.log(firstName, lastName);
      // Clear Fields
      setFirstName('');
      setLastName('');

      // Close Modal
      M.toast({
        html:
          `${firstName}  ${lastName}  added by ` + firstName + ' ' + lastName,
        classes: 'blue darken-3 rounded',
      });
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Last Name
            </label>
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

export default AddTechModal;
