import { useNavigate } from 'react-router-dom';
import '../assets/fonts.css';
import React from 'react';
import { MusicContext } from '../contexts/musicContext';

const useSelectQuiz = () => {
  const {
    isSongPlaying,
    setIsSongPlaying,
    playInitialSong,
    initialSong,
    stopInitialSong,
    setQuizPanel,
  } = React.useContext(MusicContext);

  const navigate = useNavigate();

  const navigateToCharacters = () => {
    playInitialSong();
    navigate('/dragonball-quiz/characters');
    setQuizPanel(true);
  };

  const navigateToPlanets = () => {
    playInitialSong();
    navigate('/dragonball-quiz/planets');
    setQuizPanel(true);
  };

  //Aquí pongo un escuchador para que cuando se termine de reproducir la canción se setee el estado a false otra vez.
  React.useEffect(() => {
    const handleSongEnded = () => {
      setIsSongPlaying(false);
    };
    initialSong.addEventListener('ended', handleSongEnded);
  }, [initialSong, setIsSongPlaying]);

  return {
    navigateToCharacters,
    navigateToPlanets,
    setIsSongPlaying,
    isSongPlaying,
    stopInitialSong,
  };
};
export default useSelectQuiz;
