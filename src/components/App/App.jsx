import { useState } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from 'components';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'helpers';
import { Page } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodIncrement = () => {
    setGood(s => s + 1);
  };

  const handleNeutralIncrement = () => {
    setNeutral(s => s + 1);
  };

  const handleBadIncrement = () => {
    setBad(s => s + 1);
  };

  const total = () => countTotalFeedback(good, neutral, bad);
  const positive = () => countPositiveFeedbackPercentage(total(), good);

  return (
    <Page>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onSetGood={handleGoodIncrement}
            onSetNeutral={handleNeutralIncrement}
            onSetBad={handleBadIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positive()}
          />
        </Section>
      </Container>
    </Page>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   stateKeys = () => {
//     return Object.keys(this.state);
//   };

//   handleIncrement = index => {
//     const options = this.stateKeys();
//     const currentBtn = options[index];

//     this.setState(prev => {
//       return { [currentBtn]: prev[currentBtn] + 1 };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { handleIncrement, stateKeys } = this;
//     const options = stateKeys();
//     const total = countTotalFeedback(good, neutral, bad);
//     const positive = countPositiveFeedbackPercentage(total, good);

//     return (
//       <Page>
//         <Container>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={handleIncrement}
//             />
//           </Section>
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positive}
//             />
//           </Section>
//         </Container>
//       </Page>
//     );
//   }
// }
