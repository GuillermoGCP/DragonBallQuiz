import { Props } from '../types.d';
const Character = ({ character }: Props) => {
  return (
    <>
      <img className='w-24 h-auto' src={character.image} />
      <div className='w-4/6 border p-5'>
        <p>{character.description}</p>
      </div>
    </>
  );
};
export default Character;
