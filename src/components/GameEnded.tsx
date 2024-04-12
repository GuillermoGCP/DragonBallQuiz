import NewGameButton from './NewGameButton';

type Props = {
  props: { handler: () => void; endOfTheGame: string };
};
const GameEnded = ({ props }: Props) => {
  const { handler, endOfTheGame } = props;
  return (
    <div className='mt-10'>
      <p className='text-center font-bold text-[#feb61b]'>{endOfTheGame}</p>
      <img
        src='/Mr_Satan2.webp'
        alt='Imagen del señor Satán en gesto victorioso'
      />
      <div className='flex justify-center'>
        {' '}
        <NewGameButton handler={handler}>Nueva partida</NewGameButton>
      </div>
    </div>
  );
};
export default GameEnded;
