import React from "react";
import PropTypes from "prop-types";

const Paginator = ({ actualPage, setActualPage, totalPages }) => {
  const showForward = () => {
    setActualPage(actualPage - 1);
  };

  const showNext = () => {
    setActualPage(actualPage + 1);
  };

  return (
    <div className="btn-group" role="group" aria-label="Paginador">
      {actualPage === 1 ? null : (
        <button className="btn btn-primary" type="button" onClick={showForward}>
          <i className="fas fa-backward"></i> Anterior
        </button>
      )}
      {actualPage === totalPages ? null : (
        <button className="btn btn-primary" type="button" onClick={showNext}>
          Siguiente <i className="fas fa-forward"></i>
        </button>
      )}
    </div>
  );
};

Paginator.propTypes = {
  actualPage: PropTypes.number.isRequired,
  setActualPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Paginator;
