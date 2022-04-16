import { Component } from 'react';
import pixabayAPI from '../services/pixabay-api'
import SearchBar from 'components/Searchbar'
import Loader from './Loader';
import PixabayImageGallery from './ImageGallery'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    // статус - ідле -ничего не делает, простой - стоит на месте
    status: 'idle',
    searchImage: '',
   images: [],
  };

handleFormSubmit = searchImage => {
    console.log(searchImage);
    this.setState({searchImage: searchImage });
};
  
componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchImage;
    const nextSearch = this.state.searchImage;

    if (prevSearch !== nextSearch) {
      console.log('змінився запрос');
      // console.log('попередній стейт :', prevSearch);
      // console.log('текущий стейт : ', nextSearch);
      this.setState({ status: 'pending', images: []});
      
      pixabayAPI
        .fetchPixabayImage(nextSearch)
        // якщо все добре, то ми міняємо статус на резолвд
        .then(images => {
          console.log(images);
        if (images.hits.length === 0){
        toast.error('Sorry, there are no images matching your search query. Please try again.')}
       else {this.setState({ images:images.hits, status: 'resolved' })}})
        // якщо з помилкою, то ми міняємо статус на реджектед
        .catch(error => this.setState({ error, status: 'rejected' }))
        //  в кінці запиту змінюємо лоадінг на фолс, щоб не видно було
        .finally(() => this.setState({ loading: false }));
      }
  }
  render() {
    const { images, status, error } = this.state;
    return(
    <div>
      <SearchBar inSubmit={this.handleFormSubmit} />
      <ToastContainer autoClose={3000} />
      {status === 'pending' &&  <div> <Loader images={images} /></div>}
      {status === 'rejected'&&  (<div role="alert">  <p>{error.message}</p> </div>)}    
      {status === 'resolved'&& (<div>  {images && (<PixabayImageGallery images={images} />)}   
      </div> )}    
     </div>
    ) 
  }
}
  