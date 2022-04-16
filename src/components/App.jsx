import { Component } from 'react';
import SearchForm from 'components/Searchbar'
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    image: '',
  };

handleFormSubmit = image => {
    console.log(image);
    this.setState({ image });
  };

  render() {
   return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   // justifyContent: 'center',
      //   // alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
      <SearchForm  inSubmit={this.handleFormSubmit}/>
       {/* React homework template */}
        <ToastContainer autoClose={3000} />
    </div>
  );
};
 }
  