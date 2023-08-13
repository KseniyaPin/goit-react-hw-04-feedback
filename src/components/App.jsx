import { useState, useEffect } from 'react';
import Statistics from './feedback/Statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions.js';
import Section from './feedback/Section/Section.js';
// import Notification from './feedback/Notification/Notification.js';
import css from './feedback/Feedback.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  // Зберігаємо значення: good, neutral, bad

  const onLeaveFeedback = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        console.log('good=', good);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        console.log('neutral=', neutral);
        break;
      case 'bad':
        setBad(bad + 1);
        console.log('bad=', bad);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    // setTotal(total + 1);
    setTotal(state => state + 1);
    setPositiveFeedback(((good / total) * 100).toFixed(0));

  }, [good, neutral, bad]);
  

  // const countTotalFeedback = () => {
  //   setTotal(state => state + 1);
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  // };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          className={css.feedbackOptions}
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
          // onCountTotalFeedback={countTotalFeedback}
        />
      </Section>

      {/* {!this.countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : ( */}
      <Section title="Statistic">
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onTotal={total}
          positivePercentage={positiveFeedback}
        />
      </Section>
      {/* )} */}
    </>
  );
  // }
}
