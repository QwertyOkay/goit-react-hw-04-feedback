import { StateListStyled, StateElStyled } from './feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ allStates, total, positivePercentage }) => (
  <>
    <p>Statistics</p>
    <StateListStyled>
      {Object.entries(allStates).map(el => (
        <StateElStyled key={el[0]}>
          {el[0]}: {el[1]}
        </StateElStyled>
      ))}
    </StateListStyled>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </>
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totall: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};