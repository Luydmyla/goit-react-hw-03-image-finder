import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './Searchbar.css';

export default class SearchBar extends Component {
  state = {
    searchImage: '',
  };
  // обновляє стейт при кожному нажатии в инпуті
  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    // при сабміті нашої форми визиваємо метод із АРР (хендлформсабмит), який сюди передався як проп
    // імя пропа може бути яке завгодно, я назвала інсабміт
    // проверяем, если в форму ничего не ввели, или там просто пробелі (метод трим)
    // то ми просто виходимо з цього метода і не самбітимо форму
    if (this.state.searchImage.trim() === '') {
      // console.log('пусто');

      toast.error('Введить запит');
      return;
    }
    this.props.inSubmit(this.state.searchImage);
    // очищаем стейт зразу після сабміта форми
    // this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  searchImage: PropTypes.string,
};
