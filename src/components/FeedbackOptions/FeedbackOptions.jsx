import PropTypes from 'prop-types';
import { Controls, ControlsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onIncrement }) => {
  return (
    <Controls>
      {options.map(option => {
        return (
          <ControlsItem key={option}>
            <Button type="button" onClick={() => onIncrement(option)}>
              {option}
            </Button>
          </ControlsItem>
        );
      })}
    </Controls>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
