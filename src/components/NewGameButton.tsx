import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  handler: () => void;
};
const NewGameButton = ({ children, handler }: Props) => {
  return (
    <div className=' flex gap-4'>
      <button
        className='bg-[#feb61b] hover:bg-red-600  text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out'
        onClick={handler}
      >
        {children}
      </button>
      <Link
        className='bg-[#feb61b] hover:bg-red-600  text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out'
        to='/dragonball-quiz/'
      >
        Inicio
      </Link>
    </div>
  );
};
export default NewGameButton;
