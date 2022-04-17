import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';
// import { toast } from 'react-toastify';

export default function PixabayImageGallery({ images, isButtonShown }) {
  console.log(images);
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            //     webformatURL={image.webformatURL}
            //  tags={image.tags}
          />
        ))}
      </ul>
    </div>
  );
}
