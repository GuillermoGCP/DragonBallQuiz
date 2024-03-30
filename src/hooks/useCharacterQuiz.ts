import { shuffleArray, deleteIndex } from '../services/functions';
import React from 'react';
import dragonBallJson from '../../dragonBall.json';

const useCharacterQuiz = () => {
  const endOfTheGame: string = 'Has terminado el juego';
  const [state, setState] = React.useState<number[]>([]);

  //Array de índices disponibles, tras eliminar las coincidencias con el estado:
  const availableIndex = deleteIndex(state, 58);
  if (availableIndex.length === 0) {
    console.log('Has terminado el juego');
  }
  //Se desordenan:
  const shuffledIndex = shuffleArray(availableIndex);

  //Se toma el índice 0:
  const randomIndex = shuffledIndex[0];

  //Se adjudica a la variable para ser pintada:
  const character = dragonBallJson[randomIndex] && dragonBallJson[randomIndex];

  return {
    state,
    setState,
    character,
    randomIndex,
    endOfTheGame,
  };
};
export default useCharacterQuiz;
