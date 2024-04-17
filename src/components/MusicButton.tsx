type Props = {
  state: {
    stopInitialSong: () => void;
    isSongPlaying: boolean;
  };
};

const MusicButton = ({ state }: Props) => {
  const { stopInitialSong, isSongPlaying } = state;

  return (
    <div className=' flex justify-end mr-6 mt-4'>
      <button
        value='Botón'
        onClick={() => {
          stopInitialSong();
        }}
      >
        <img
          className='w-8'
          src={
            isSongPlaying
              ? '/src/assets/icons/nota-musical.png'
              : '/src/assets/icons/altavoz22.svg'
          }
          alt='iconos para indicar: con audio o sin audio'
        />
      </button>
    </div>
  );
};
export default MusicButton;
