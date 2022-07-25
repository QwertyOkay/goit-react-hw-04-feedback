import { BtnListStyled, BtnStyled } from "./feedback.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (

            <BtnListStyled>
                {Object.keys(options).map(stateKey => (
                    <BtnStyled key={stateKey} onClick={ () => onLeaveFeedback(stateKey)}>{ stateKey }</BtnStyled>
                ))
                }
            </BtnListStyled>
    

)


FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};