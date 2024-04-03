import { shuffleArray, deleteIndex } from '../services/functions';
import React from 'react';
import dragonBallCharactersJson from '../../dragonBallCharacters.json';

const useCharacterQuiz = () => {
  const endOfTheGame: string = 'Has terminado el juego';
  const [IndexState, setIndexState] = React.useState<number[]>([]);
  const [newGame, setNewGame] = React.useState<boolean>(true);

  //Array de índices disponibles para los personajes, tras eliminar las coincidencias con el estado:
  const availableIndex = deleteIndex(
    IndexState,
    dragonBallCharactersJson.length
  );
  if (availableIndex.length === 0) {
    console.log('Has terminado el juego');
  }
  //Se desordenan:
  const shuffledIndex = shuffleArray(availableIndex);

  //Se toma el índice 0:
  const randomIndex = shuffledIndex[0];

  //Se adjudica a la variable para ser pintada:
  const character =
    dragonBallCharactersJson[randomIndex] &&
    dragonBallCharactersJson[randomIndex];

  return {
    IndexState,
    setIndexState,
    character,
    randomIndex,
    endOfTheGame,
    newGame,
    setNewGame,
  };
};
export default useCharacterQuiz;