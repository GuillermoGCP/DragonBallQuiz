import { CharacterPlanetProps } from '../types.d';
import '../assets/landScapeStyles.css';

const CharacterOrPlanet = ({
  character: characterOrPlanet,
}: CharacterPlanetProps) => {
  return (
    <>
      <div className=' planetMainContainer flex  flex-col items-center my-6 lg:w-[420px]'>
        <div className='h-48 lg:h-auto'>
          <img
            className='planetImage w-auto h-full object-cover mb-6 lg:w-80 '
            src={characterOrPlanet.image}
          />
        </div>
        <div className=' planetDescription hidden w-4/ p-5 xl:block'>
          <p className={'flex justify-center text-gray-500 text-sm'}>
            {characterOrPlanet.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default CharacterOrPlanet;
