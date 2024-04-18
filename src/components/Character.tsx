import { CharacterPlanetProps } from '../types.d';
import '../assets/landScapeStyles.css';

const Character = ({ character }: CharacterPlanetProps) => {
  return (
    <>
      <div className=' characterMainContainer flex  flex-col items-center my-6  lg:w-[420px]'>
        <img
          className='characterImage w-28 mb-6 lg:w-56 '
          src={character.image}
        />
        <div className='characterDescription hidden w-4/ p-5 xl:block'>
          <p className={'flex justify-center text-gray-500 text-md'}>
            {character.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Character;
