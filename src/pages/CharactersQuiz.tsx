import Character from '../components/Character';
import useCharacterQuiz from '../hooks/useCharacterQuiz';
import ButtonPanel from '../components/ButtonPanel';

const CharactersQuiz = () => {
  const { setState, character, randomIndex, endOfTheGame } = useCharacterQuiz();

  const nextCharacterData = {
    setState,
    randomIndex,
    character,
  };

  return (
    <>
      {character !== undefined ? (
        <>
          <Character character={character} />
          <ButtonPanel nextCharacterData={nextCharacterData} />
        </>
      ) : (
        <p>{endOfTheGame}</p>
      )}
    </>
  );
};
export default CharactersQuiz;
