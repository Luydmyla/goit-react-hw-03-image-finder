import { Component } from 'react';
import pixabayAPI from '../services/pixabay-api';
// import FetchPixabayImage from '../services/pixabay-api'
import SearchBar from 'components/Searchbar';
import Loader from './Loader';
import Button from './Button';
import PixabayImageGallery from './ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import * as Scroll from 'react-scroll';

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    // статус - ідле -ничего не делает, простой - стоит на месте
    status: 'idle',
    searchImage: '',
    images: [],
    page: 1,
    // isButtonShown: false,
  };

  handleFormSubmit = searchImage => {
    console.log(searchImage);
    this.setState({ searchImage: searchImage });
  };

  loadImagesBySearchImage(searchImage) {
    this.setState({ status: 'pending', images: [] });
    const { page } = this.state;
    pixabayAPI
      .fetchPixabayImage(searchImage, page)
      // якщо все добре, то ми міняємо статус на резолвд
      .then(images => {
        console.log(images);
        if (images.hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({ images: images.hits, status: 'resolved' });
      })
      // якщо з помилкою, то ми міняємо статус на реджектед
      .catch(error => this.setState({ error, status: 'rejected' }))
      //  в кінці запиту змінюємо лоадінг на фолс, щоб не видно було
      .finally(() => this.setState({ loading: false }));
  }

  // Load more images by current search query
  loadMoreImages(page) {
    this.setState({ status: 'pending' });
    // const fetchPixabayImage = new FetchPixabayImage();
    // fetchPixabayImage.fetchImage(nextSearch)
    // this.icrementPage();
    const { images, searchImage } = this.state;
    pixabayAPI
      .fetchPixabayImage(searchImage, page)
      // якщо все добре, то ми міняємо статус на резолвд
      .then(response => {
        console.log(response);
        if (response.hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        console.log('a', { images, response: response.hits });

        this.setState({
          images: [...response.hits, ...images],
          status: 'resolved',
        });
      })
      // якщо з помилкою, то ми міняємо статус на реджектед
      .catch(error => this.setState({ error, status: 'rejected' }))
      //  в кінці запиту змінюємо лоадінг на фолс, щоб не видно було
      .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchImage;
    const nextSearch = this.state.searchImage;

    if (prevSearch !== nextSearch) {
      console.log('змінився запрос');
      // console.log('попередній стейт :', prevSearch);
      // console.log('текущий стейт : ', nextSearch);
      this.loadImagesBySearchImage(nextSearch);
    }

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevPage !== nextPage) {
      console.log('змінився номер сторінки');
      this.loadMoreImages(nextPage);
    }
  }
  // icrementPage() {
  //   console.log(this.state.page);
  //   this.setState(prevState => ({
  //           page: prevState.page + 1,
  //           }
  //       ));

  // }
  resetPage() {
    console.log(this.state.page);
    this.setState({ page: 1 });
  }
  // toggleIsButtonShown = () => {
  //   console.log(this.state.isButtonShown);
  //   this.setState({ isButtonShown: true });
  // }
  onButtonClick() {
    console.log('Видно кнопку');
    console.log(this);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }
  onButtonUp(e) {
    e.preventDefault();
    console.log('скролл');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Scroll() {
  //   let Scroll = require('react-scroll');
  //   let scroll = Scroll.animateScroll;
  //   scroll.scrollToBottom();
  // }

  render() {
    const { images, status, error } = this.state;
    return (
      <div>
        <SearchBar inSubmit={this.handleFormSubmit} />
        {/* {isButtonShown && (<Button onClick={this.onButtonClick}/> )} */}

        <ToastContainer autoClose={3000} />

        {status === 'pending' && (
          <div>
            <Loader images={images} />
          </div>
        )}
        {status === 'rejected' && (
          <div role="alert">
            <p>{error.message}</p>
          </div>
        )}
        {status === 'resolved' && (
          <div>
            {images.length !== 0 && (
              <>
                <PixabayImageGallery
                  images={images}
                  // onScroll={() => this.Scroll()}
                  // style={{ transition: 'ease 0.5s' }}
                />

                <Button onClick={() => this.onButtonClick()} />
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
