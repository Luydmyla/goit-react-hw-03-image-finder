import { Component } from 'react';


// import classNames from 'classnames';
// бібліотека для повідомлень, типа алертов
// треба її встановити, заімпортувати тост і тост контейнер(це в апп)
import { toast } from 'react-toastify';
import './Searchbar.css';
//  const styles = { form: { marginBottom: 20 } };

export default class SearchForm extends Component {
  // хранит стейт покемон по имени
  state = {
    image: '',
  };
  // обновляє стейт при кожному нажатии в инпуті
  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ image: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    // при сабміті нашої форми визиваємо метод із АРР (хендлформсабмит), який сюди передався як проп
    // імя пропа може бути яке завгодно, я назвала інсабміт - це не метод, це просто імя пропа
    this.props.inSubmit(this.state.image);
    // проверяем, если в форму ничего не ввели, или там просто пробелі (метод трим)
    // то ми просто виходимо з цього метода і не самбітимо форму
    if (this.state.image.trim() === '') {
      // і показуємо повідомлення
      // alert('введіть  image');
      // визиваємо тост просто як функцію, там де потрібно(у нього там куча настроєк і виглядів, треба почитати доки)
      toast.error('Введить запит.');
      return;
    }

    // this.props.onSubmit(this.state.image) - єто у репеті так назван проп онсабмит;
    // очищаем стейт зразу після сабміта форми
    this.setState({ image: '' });
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
            value={this.state.image}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
      //   <form onSubmit={this.handleSubmit} style={styles.form}>
      //     <input
      //       type="text"
      //       name="pokemonName"
      //       value={this.state.pokemonName}
      //       onChange={this.handleNameChange}
      //     />
      //     <button type="submit">
      //       <ImSearch style={{ marginRight: 8 }} />
      //       Найти
      //     </button>
      //   </form>
    );
  }
}
