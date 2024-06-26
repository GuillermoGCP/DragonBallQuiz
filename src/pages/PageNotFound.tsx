import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className=' mt-10 flex flex-col items-center justify-center'>
      <h1 className='font-thin text-xl'>No se encuentra la página</h1>
      <Link to='/dragonball-quiz' className='font-thin text-xl'>
        <p className='hover:scale-110 transition-transform'>
          Ve al <span className='text-orange-600 '>INICIO</span>
        </p>
      </Link>
      <img
        className='w-80'
        src='/notFound.jpg'
        alt='Imagen de Goku de pequeño, durmiendo'
      />
    </div>
  );
};
export default PageNotFound;
