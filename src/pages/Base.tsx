import { Outlet } from 'react-router-dom';
const Base = () => {
  return (
    <>
      <header className='flex justify-around border bg-[#FEB81C] '>
        <img
          className='w-52 '
          src='/Letras_cabecera.jpg'
          alt='Letras de dragon ball en color amarillo y rojo respectivamente y con una bola de una estrella entre las dos palabras'
        />
        <img
          src='/logo.jpg'
          alt='Imagen de la cabeza de un dragón sonriente al estilo Dragon Ball'
          className='w-20'
        />
      </header>
      <Outlet />
      {/* <footer className='flex items-center justify-center border h-12'>
        <p className='text-xs text-gray-600'>
          Creado por Guillermo Cerviño 2024®
        </p>
      </footer> */}
    </>
  );
};
export default Base;
