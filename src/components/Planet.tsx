import { CharacterPlanetProps } from '../types.d';
import '../assets/landScapeStyles.css';

const CharacterOrPlanet = ({
  character: characterOrPlanet,
}: CharacterPlanetProps) => {
  return (
    <>
      <div className=' planetMainContainer flex  flex-col items-center my-6 '>
        <img
          className='planetImage w-60 h-auto rounded-xl mb-6'
          src={characterOrPlanet.image}
        />
        <div className=' planetDescription w-4/6 border p-5'>
          <p className={'flex justify-center text-gray-500 text-sm'}>
            {characterOrPlanet.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default CharacterOrPlanet;
