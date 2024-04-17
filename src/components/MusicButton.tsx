type Props = {
  state: {
    stopInitialSong: () => void;
    isSongPlaying: boolean;
  };
};

const MusicButton = ({ state }: Props) => {
  const { stopInitialSong, isSongPlaying } = state;

  return (
    <>
      <button
        value='Botón'
        onClick={() => {
          stopInitialSong();
        }}
      >
        <img
          src={
            isSongPlaying
              ? '/src/assets/icons/nota.png'
              : '/src/assets/icons/Sin-audio.png'
          }
          alt='iconos para indicar: con audio o sin audio'
        />
      </button>
    </>
  );
};
export default MusicButton;
