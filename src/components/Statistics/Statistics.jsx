import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list}>
      <li>
        Good: <p>{good}</p>
      </li>
      <li>
        Neutral: <p>{neutral}</p>
      </li>
      <li>
        Bad: <p>{bad}</p>
      </li>
      <li>
        Total: <p>{total}</p>
      </li>
      <li>
        Positive feedback: <p>{positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
