import React from 'react';
import PropTypes from 'prop-types';

function Profile({ firstName, lastName }) {
  return (
    <div id="profile">
      {firstName} {lastName}
    </div>
  );
}

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Profile;
