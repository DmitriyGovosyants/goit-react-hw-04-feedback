import { useState } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from 'components';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'helpers';
import { Page } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = countTotalFeedback(good, neutral, bad);
  const positive = countPositiveFeedbackPercentage(total, good);

  const feedbackData = ['good', 'neutral', 'bad'];

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        return setGood(s => s + 1);

      case 'neutral':
        return setNeutral(s => s + 1);

      case 'bad':
        return setBad(s => s + 1);

      default:
        return;
    }
  };

  return (
    <Page>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackData}
            onIncrement={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      </Container>
    </Page>
  );
};
