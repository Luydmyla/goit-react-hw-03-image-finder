import './Loader.css';

// взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали ей цсс клас
import { ImSpinner9 } from 'react-icons/im';
// import ImageGalleryItem from '../ImageGalleryItem';
// import pendingImage from './pending.png';

// export default function Loader({ images }) {
// ми вручну зробимо такий обєкт зі свойствами, які ми беремо з обєкта лише ті що потрібні
// це такий скелетон
// const imageObj = {
//   webformatURL: pendingImage,
//   tags: images.tags,
// };
export default function Loader() {
  return (
    <div role="alert">
      {/* <div> */}
      <div className="spinner-container">
        <ImSpinner9 size="32" className="spinner" />
        Loading...
      </div>
      {/* і тут рендеримо лише з вибраними  обьекта який ми створили */}
      {/* {images.length !== 0 && <ImageGalleryItem image={imageObj} />} */}
    </div>
  );
}
