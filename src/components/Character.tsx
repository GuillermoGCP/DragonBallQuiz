import { CharacterPlanetProps } from '../types.d';
import '../assets/landScapeStyles.css';

const Character = ({ character }: CharacterPlanetProps) => {
  return (
    <>
      <div className=' characterMainContainer flex  flex-col items-center my-6  lg:w-[420px]'>
        <img
          className='characterImage w-28 h-auto rounded-xl mb-6 lg:w-40'
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
