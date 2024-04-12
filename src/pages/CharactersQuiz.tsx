import Character from '../components/Character';
import useCharacterQuiz from '../hooks/useCharacterQuiz';
import ButtonPanel from '../components/ButtonPanel';
import FinalScore from '../components/FinalScore';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import React from 'react';
import NewGameButton from '../components/NewGameButton';
import '../assets/landScapeStyles.css';

const CharactersQuiz = () => {
  const {
    setIndexState,
    character,
    randomIndex,
    endOfTheGame,
    setNewGame,
    newGame,
  } = useCharacterQuiz();

  const nextCharacterData = {
    setState: setIndexState,
    setNewGame,
    newGame,
    randomIndex,
    character,
  };
  const { finalScore } = React.useContext(ButtonPanelContext);

  const finalScoreData = {
    points: finalScore,
    numberOfQuestions: 58,
  };
  const handler = () => setNewGame(true);
  return (
    <div className='flex justify-center '>
      {character !== undefined ? (
        <>
          {newGame ? (
            <div className='container'>
              <Character character={character} />
              <ButtonPanel nextCharacterData={nextCharacterData} />
            </div>
          ) : (
            <>
              <NewGameButton handler={handler}>Nueva partida</NewGameButton>
              <FinalScore finalScoreData={finalScoreData} />
            </>
          )}
        </>
      ) : (
        <p>{endOfTheGame}</p>
      )}
    </div>
  );
};
export default CharactersQuiz;
