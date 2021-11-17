import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setSearch }) => {
  // States
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  const searchImages = (e) => {
    e.preventDefault();

    // Validate
    if (term.trim() === "") {
      setError(true);
      return null;
    }

    setError(false);
    setSearch(term);
  };

  return (
    <form onSubmit={searchImages}>
      <div className="form-row">
        <div class="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imágen, ejemplo: fútbol, café"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-4">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="Buscar"
          >
            <i className="fas fa-search"></i> Buscar
          </button>
        </div>
      </div>

      {error ? <Error message="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Form;
