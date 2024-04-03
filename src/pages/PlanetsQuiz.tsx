import usePlanetsQuiz from '../hooks/usePlanetsQuiz';
import FinalScore from '../components/FinalScore';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import React from 'react';
import CharacterOrPlanet from '../components/CharacterOrPlanet';
import NewGameButton from '../components/NewGameButton';
import ButtonPanel from '../components/ButtonPanel';

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
    <>
      {planet !== undefined ? (
        <>
          {newGame ? (
            <>
              <CharacterOrPlanet character={planet} />
              <ButtonPanel nextCharacterData={nextCharacterData} />
            </>
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
    </>
  );
};
export default PlanetsQuiz;
