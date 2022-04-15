import { Component } from 'react';
import SearchForm from 'components/Searchbar'

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
    </div>
  );
};
 }
  