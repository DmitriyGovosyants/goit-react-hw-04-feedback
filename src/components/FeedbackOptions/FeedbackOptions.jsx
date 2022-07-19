import PropTypes from 'prop-types';
import { Controls, ControlsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onSetGood, onSetNeutral, onSetBad }) => {
  return (
    <Controls>
      <ControlsItem>
        <Button type="button" onClick={onSetGood}>
          good
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onSetNeutral}>
          neutral
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onSetBad}>
          bad
        </Button>
      </ControlsItem>
    </Controls>
  );
};

FeedbackOptions.propTypes = {
  onSetGood: PropTypes.func.isRequired,
  onSetNeutral: PropTypes.func.isRequired,
  onSetBad: PropTypes.func.isRequired,
};
