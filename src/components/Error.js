import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => (
  <div className="alert alert-primary" role="alert">
    <i className="fas fa-times-circle"></i> <strong>{message}</strong>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
