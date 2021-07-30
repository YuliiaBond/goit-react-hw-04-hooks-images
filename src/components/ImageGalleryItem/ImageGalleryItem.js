import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';

const ImageGalleryItem = ({webformatURL, onClick, largeImageURL, tags}) => (
    <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => {
            onClick({ largeImageURL })
        }}
    />
);
    
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
