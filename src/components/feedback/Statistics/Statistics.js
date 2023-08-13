const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>Good: {onGood}</li>
      <li>Neutral: {onNeutral}</li>
      <li>Bad: {onBad}</li>
      <li>Total: {onTotal} </li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
