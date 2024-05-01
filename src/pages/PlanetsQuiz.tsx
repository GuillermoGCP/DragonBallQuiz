import usePlanetsQuiz from '../hooks/usePlanetsQuiz';
import FinalScore from '../components/FinalScore';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import React from 'react';
import Planet from '../components/Planet';
import NewGameButton from '../components/NewGameButton';
import ButtonPanel from '../components/ButtonPanel';
import '../assets/landScapeStyles.css';
import GameEnded from '../components/GameEnded';

const PlanetsQuiz = () => {
  //Lógica para cuando se recargue la página.
  window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    window.location.href = '/';
  });

  window.onload = function () {
    if (performance.navigation.type === 1) {
      window.location.href = '/';
    }
  };
  const {
    setIndexState,
    planet,
    randomIndex,
    endOfTheGame,
    setNewGame,
    newGame,
  } = usePlanetsQuiz();

  const handler = () => setNewGame(true);

  const nextCharacterData = {
    setState: setIndexState,
    setNewGame,
    newGame,
    randomIndex,
    planet,
  };
  const { finalScore } = React.useContext(ButtonPanelContext);

  const finalScoreData = {
    points: finalScore,
    numberOfQuestions: 20,
  };

  const props = {
    handler,
    endOfTheGame,
  };

  return (
    <div className='flex justify-center  items-stretch lg:mt-14 '>
      {planet !== undefined ? (
        <>
          {newGame ? (
            <div className='planetQuizcontainer lg:flex items-center justify-around h-[567px]'>
              <Planet character={planet} />
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
export default PlanetsQuiz;
