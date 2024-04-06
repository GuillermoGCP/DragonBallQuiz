import { CharacterPlanetProps } from '../types.d';

const CharacterOrPlanet = ({
  character: characterOrPlanet,
}: CharacterPlanetProps) => {
  return (
    <>
      <div className='flex justify-center my-6 '>
        <img
          className='w-60 h-auto rounded-xl '
          src={characterOrPlanet.image}
        />
      </div>
      <div className='w-4/6 border p-5 hidden md:block'>
        <p>{characterOrPlanet.description}</p>
      </div>
    </>
  );
};
export default CharacterOrPlanet;
