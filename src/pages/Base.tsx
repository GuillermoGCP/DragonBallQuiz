import { Outlet } from 'react-router-dom';
import MusicButton from '../components/MusicButton';
import { MusicContext } from '../contexts/musicContext';
import React from 'react';
const Base = () => {
  //Botón para la música
  const { isSongPlaying, stopInitialSong, quizPanel } =
    React.useContext(MusicContext);
  const buttonProps = {
    isSongPlaying,
    stopInitialSong,
  };
  return (
    <>
      <header className='flex justify-around border bg-[#FEB81C] '>
        <img
          className='w-52 '
          src='/Letras_cabecera.jpg'
          alt='Letras de dragon ball en color amarillo y rojo respectivamente y con una bola de una estrella entre las dos palabras'
        />
        <img
          src='/logo.jpg'
          alt='Imagen de la cabeza de un dragón sonriente al estilo Dragon Ball'
          className='w-20'
        />
      </header>
      {quizPanel && <MusicButton state={buttonProps} />}
      <Outlet />
    </>
  );
};
export default Base;
