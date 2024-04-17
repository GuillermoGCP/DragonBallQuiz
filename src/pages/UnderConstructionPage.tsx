import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className=' mt-10 flex flex-col items-center justify-center'>
      <h1 className='font-thin text-xl'>Quiz en construcción</h1>
      <Link to='/dragonball-quiz' className='font-thin text-xl'>
        <p className='hover:scale-110 transition-transform mb-6'>
          Ve al <span className='text-orange-600 '>INICIO</span>
        </p>
      </Link>
      <img
        className='w-80'
        src='/underConstructionPage.jpg'
        alt='Imagen de Bulma ruborizada'
      />
    </div>
  );
};
export default PageNotFound;
