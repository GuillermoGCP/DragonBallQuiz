import { CharacterPlanetProps } from '../types.d';
import '../assets/landScapeStyles.css';

const Character = ({ character }: CharacterPlanetProps) => {
  return (
    <>
      <div className=' characterMainContainer flex  flex-col items-center my-6 '>
        <img
          className='characterImage w-60 h-auto rounded-xl mb-6'
          src={character.image}
        />
        <div className=' characterDescription w-4/6 border p-5'>
          <p className={'flex justify-center text-gray-500 text-sm'}>
            {character.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Character;
