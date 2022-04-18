import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

export default function PixabayImageGallery({ images }) {
  console.log(images);
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
}
PixabayImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
