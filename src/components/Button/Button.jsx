import PropTypes from 'prop-types';
import './Button.css';
export default function Button({ onClick }) {
  return (
    <div className="Button-container">
      <button type="button" onClick={onClick} className="Button">
        Load more...
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
