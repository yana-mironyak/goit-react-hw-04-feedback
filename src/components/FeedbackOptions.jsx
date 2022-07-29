import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => <button type='button' className={css.feedbackButtons} name={option} key={option} onClick={(evt) => onLeaveFeedback(evt)}>{option}</button>)}
        </div>
    )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}