import ImageGalleryItem from '../ImageGalleryItem'
import './ImageGallery.css'
// import { toast } from 'react-toastify';
export default function PixabayImageGallery({ images }) {
  return (
    <div>
          <ul className="ImageGallery">
               {images.map(image =>
                  <ImageGalleryItem
                      key={image.id}
                      webformatURL={image.webformatURL}
                      tags={image.tags} />              
              )}
      </ul>
    </div>
  );
}