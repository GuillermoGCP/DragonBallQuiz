import { shuffleArray, deleteIndex } from '../services/functions';
import React from 'react';
import dragonBallPlanetsJson from '../../dragonBallPlanets.json';

const usePlanetQuiz = () => {
  const endOfTheGame: string = '¡Enorabuena, has terminado el juego!';
  const [IndexState, setIndexState] = React.useState<number[]>([]);
  const [newGame, setNewGame] = React.useState<boolean>(true);

  //Array de índices disponibles para los personajes, tras eliminar las coincidencias con el estado:
  const availableIndex = deleteIndex(IndexState, dragonBallPlanetsJson.length);
  if (availableIndex.length === 0) {
    console.log('Has terminado el juego');
  }
  //Se desordenan:
  const shuffledIndex = shuffleArray(availableIndex);

  //Se toma el índice 0:
  const randomIndex = shuffledIndex[0];

  //Se adjudica a la variable para ser pintada:
  const planet =
    dragonBallPlanetsJson[randomIndex] && dragonBallPlanetsJson[randomIndex];

  return {
    IndexState,
    setIndexState,
    planet,
    randomIndex,
    endOfTheGame,
    newGame,
    setNewGame,
  };
};
export default usePlanetQuiz;
