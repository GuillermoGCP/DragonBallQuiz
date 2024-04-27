import Character from '../components/Character';
import useCharacterQuiz from '../hooks/useCharacterQuiz';
import ButtonPanel from '../components/ButtonPanel';
import FinalScore from '../components/FinalScore';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import React from 'react';
import NewGameButton from '../components/NewGameButton';
import '../assets/landScapeStyles.css';
import GameEnded from '../components/GameEnded';

const CharactersQuiz = () => {
  //Lógica para cuando se recargue la página.
  // window.addEventListener('beforeunload', function (event) {
  //   event.preventDefault();
  //   window.location.href = '/';
  // });

  // window.onload = function () {
  //   if (performance.navigation.type === 1) {
  //     window.location.href = '/';
  //   }
  // };

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
  const handler = () => {
    setNewGame(true);
  };
  const props = {
    handler,
    endOfTheGame,
  };

  return (
    <div className='flex justify-center  items-stretch lg:mt-14 '>
      {character !== undefined ? (
        <>
          {newGame ? (
            <div className='container  lg:flex items-center justify-around h-[567px]'>
              <Character character={character} />
              <ButtonPanel nextCharacterData={nextCharacterData} />
            </div>
          ) : (
            <div className='gameEndedPage flex flex-col items-center'>
              <FinalScore finalScoreData={finalScoreData} />
              <NewGameButton handler={handler}>Nueva partida</NewGameButton>
            </div>
          )}
        </>
      ) : (
        <GameEnded props={props} />
      )}
    </div>
  );
};

export default CharactersQuiz;
