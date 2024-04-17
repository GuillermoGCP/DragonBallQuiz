import React from 'react';
import { MusicContext } from '../contexts/musicContext';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  handler: () => void;
};
const NewGameButton = ({ children, handler }: Props) => {
  const { gameLost, setQuizPanel } = React.useContext(MusicContext);
  const navigate = useNavigate();
  return (
    <div className=' flex gap-4'>
      <button
        className='bg-[#feb61b] hover:bg-red-600  text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out'
        onClick={() => {
          handler();
          gameLost.pause();
          setQuizPanel(true);
          navigate('/dragonball-quiz/');
        }}
      >
        {children}
      </button>
    </div>
  );
};
export default NewGameButton;
