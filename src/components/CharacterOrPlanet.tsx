import { CharacterPlanetProps } from '../types.d';

const CharacterOrPlanet = ({
  character: characterOrPlanet,
}: CharacterPlanetProps) => {
  return (
    <>
      <img className='w-24 h-auto' src={characterOrPlanet.image} />
      <div className='w-4/6 border p-5'>
        <p>{characterOrPlanet.description}</p>
      </div>
    </>
  );
};
export default CharacterOrPlanet;
