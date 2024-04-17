import React from 'react';
import { ButtonPanelProps, MusicContextType } from '../types.d';

const MusicContext = React.createContext<MusicContextType>(
  {} as MusicContextType
);

const MusicProvider = ({ children }: ButtonPanelProps) => {
  //Estado para manejar la música:
  const [isSongPlaying, setIsSongPlaying] = React.useState(false);
  const [initialSong] = React.useState(new Audio('/Intro.mp3'));
  const [gameLost] = React.useState(new Audio('/Intro2.mp3'));

  const playInitialSong = () => {
    if (!isSongPlaying) {
      setIsSongPlaying(true);
      initialSong.play();
    }
  };

  const stopInitialSong = () => {
    if (isSongPlaying) {
      initialSong.pause();
      setIsSongPlaying(false);
    } else {
      initialSong.play();
      setIsSongPlaying(true);
    }
  };
  //Estado para mostrar los controles de volumen:
  const [quizPanel, setQuizPanel] = React.useState<boolean>(false);
  return (
    <MusicContext.Provider
      value={{
        isSongPlaying,
        setIsSongPlaying,
        playInitialSong,
        stopInitialSong,
        initialSong,
        gameLost,
        setQuizPanel,
        quizPanel,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider, MusicContext };
