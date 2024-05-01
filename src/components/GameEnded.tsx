import NewGameButton from './NewGameButton';

type Props = {
  props: {
    handler: () => void;
    endOfTheGame: string;
    finalScoreData: {
      points: number;
      numberOfQuestions: number;
    };
  };
};
const GameEnded = ({ props }: Props) => {
  const { handler, endOfTheGame, finalScoreData } = props;
  const { points, numberOfQuestions } = finalScoreData;
  return (
    <div className='gameEndedContainer mt-10'>
      <div className='subContainer'>
        <p className='text-center font-bold text-[#feb61b]'>{`¡Has obtenido ${points} puntos de ${numberOfQuestions} posibles!`}</p>
        <p className='text-center font-bold text-[#feb61b]'>{endOfTheGame}</p>
        <img
          className='SatanImage w-80'
          src='/Mr_Satan2.webp'
          alt='Imagen del señor Satán en gesto victorioso'
        />
      </div>
      <div className='buttonContainer flex justify-center'>
        <NewGameButton handler={handler}>Nueva partida</NewGameButton>
      </div>
    </div>
  );
};
export default GameEnded;
