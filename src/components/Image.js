import React from "react";
import PropTypes from "prop-types";

const Image = ({ image }) => {
  // Extract values
  const { largeImageURL, previewURL, likes, tags, views } = image;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />

        <div className="card-body">
          <p className="card-text">{likes} Me Gusta</p>
          <p className="card-text">{views} Vistas</p>
        </div>

        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-block"
          >
            <i className="fas fa-image"></i> Ver imágen
          </a>
        </div>
      </div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
