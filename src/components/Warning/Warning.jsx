import PropTypes from 'prop-types';
import css from './Warning.module.css';

function Warning({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}

Warning.prototype = {
  message: PropTypes.string.isRequired,
};

export default Warning;
