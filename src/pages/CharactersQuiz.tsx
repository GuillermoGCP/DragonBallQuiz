import Character from '../components/Character';
import useCharacterQuiz from '../hooks/useCharacterQuiz';
import ButtonPanel from '../components/ButtonPanel';

const CharactersQuiz = () => {
  const {
    setState,
    character,
    randomIndex,
    endOfTheGame,
    setNewGame,
    newGame,
  } = useCharacterQuiz();

  const nextCharacterData = {
    setState,
    setNewGame,
    newGame,
    randomIndex,
    character,
  };

  return (
    <>
      {character !== undefined ? (
        <>
          {newGame ? (
            <>
              <Character character={character} />
              <ButtonPanel nextCharacterData={nextCharacterData} />
            </>
          ) : (
            <button
              onClick={() => {
                setNewGame(true);
              }}
            >
              Nueva partida
            </button>
          )}
        </>
      ) : (
        <p>{endOfTheGame}</p>
      )}
    </>
  );
};
export default CharactersQuiz;
