type Props = {
  finalScoreData: {
    points: number;
    numberOfQuestions: number;
  };
};
const FinalScore = ({ finalScoreData }: Props) => {
  const { points, numberOfQuestions } = finalScoreData;
  return (
    <div className='text-center font-extrabold mt-14 text-[#feb61b]'>
      <p className=''>{`¡Has obtenido ${points} puntos de ${numberOfQuestions} posibles!`}</p>
      <img src='/Mr_Satan.webp' alt='Imagen del señor Satán, de Dragon Ball' />
    </div>
  );
};
export default FinalScore;
