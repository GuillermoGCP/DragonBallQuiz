type Props = {
  finalScoreData: {
    points: number;
    numberOfQuestions: number;
  };
};
const FinalScore = ({ finalScoreData }: Props) => {
  const { points, numberOfQuestions } = finalScoreData;
  return (
    <>
      <p>{`¡Has obtenido ${points} puntos de ${numberOfQuestions} posibles!`}</p>
    </>
  );
};
export default FinalScore;
