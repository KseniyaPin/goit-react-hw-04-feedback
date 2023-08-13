import { useState, useEffect } from 'react';
import Statistics from './feedback/Statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions.js';
import Section from './feedback/Section/Section.js';
import Notification from './feedback/Notification/Notification.js';
import css from './feedback/Feedback.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const onLeaveFeedback = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        setTotal(state => state + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        setTotal(state => state + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        setTotal(state => state + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setPositiveFeedback(((good / total) * 100).toFixed(0));
  }, [good, total]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          className={css.feedbackOptions}
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistic">
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotal={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      )}
    </>
  );
}
