import './Loader.css'

// взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали ей цсс клас
import { ImSpinner9 } from 'react-icons/im';
import ImageGalleryItem from '../ImageGalleryItem'
import pendingImage from './pending.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function Loader({ images }) {
  // ми вручну зробимо такий обєкт зі свойствами, які ми беремо з обєкта лише ті що потрібні
  // це такий скелетон
    const imageArr = {
    webformatURL: pendingImage,
    tags: images.tags,          
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        {/* // взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали ей */}
        {/* цсс клас */}
        <ImSpinner9 size="32" className="spinner" />
        Загружаем...
      </div>
          {/* і тут рендеримо лише з вибраними  обьекта який ми створили */}
          {images.length !== 0 && <ImageGalleryItem webformatURL={imageArr.webformatURL} tags={imageArr.tags}/>}
      
    </div>
  );
}
