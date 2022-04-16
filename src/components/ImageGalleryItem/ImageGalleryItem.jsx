import './ImageGalleryItem.css'

const ImageGalleryItem = ({ webformatURL, tags }) => {
    return(
    <li className="ImageGalleryItem">
    <img src={webformatURL } alt={tags} loading="lazy"  className="ImageGalleryItem-image"/>
    </li>)
} 
export default ImageGalleryItem;



