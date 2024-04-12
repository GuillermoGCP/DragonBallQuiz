import usePlanetsQuiz from '../hooks/usePlanetsQuiz';
import FinalScore from '../components/FinalScore';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import React from 'react';
import Planet from '../components/Planet';
import NewGameButton from '../components/NewGameButton';
import ButtonPanel from '../components/ButtonPanel';
import '../assets/landScapeStyles.css';

const PlanetsQuiz = () => {
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

  return (
    <div className='flex justify-center'>
      {planet !== undefined ? (
        <>
          {newGame ? (
            <div className='planetQuizcontainer'>
              <Planet character={planet} />
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
export default PlanetsQuiz;
