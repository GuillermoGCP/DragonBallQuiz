type Props = {
  state: {
    stopInitialSong: () => void;
    isSongPlaying: boolean;
  };
};

const MusicButton = ({ state }: Props) => {
  const { stopInitialSong, isSongPlaying } = state;
  //Prueba deploy2:

  return (
    <div className='musicIconContainer flex justify-end mr-6 mt-4'>
      <button
        value='Botón'
        onClick={() => {
          stopInitialSong();
        }}
      >
        <img
          className=' w-8'
          src={isSongPlaying ? '/nota-musical.png' : '/altavoz22.svg'}
          alt=''
        />
      </button>
    </div>
  );
};
export default MusicButton;
