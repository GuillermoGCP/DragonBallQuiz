import useSelectQuiz from '../hooks/useSelectQuiz';

const SelectQuiz = () => {
  const { navigateToCharacters, navigateToPlanets } = useSelectQuiz();

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[80vw] mt-12'>
          <h1 className='font-[dragonBall] text-[#feb61b]'>Instrucciones</h1>
          <p className='text-black font-thin'>
            Solo podrás cometer 7 errores o estás perdido, pero contarás con la
            ayuda del dragón mágico, que al activarlo, eliminará una de las
            opciones erróneas. Para lograr tenerlo de nuevo disponible debes
            reunir las siete bolas mágicas, respondiendo siete respuestas
            correctas consecutivas. Si fallas, las bolas se irán de nuevo a
            distintas partes del planeta. Y ojo, si se te acaba el tiempo, el
            dragón desaparecerá, así que úsalo cuando sea necesario.
          </p>
          <div className='flex justify-center gap-16 items-center mt-8'>
            <button onClick={navigateToCharacters}>
              <img
                className='w-52 hover:scale-110 transition-transform'
                src='/Goku.jpg'
                alt='Dibujo de Goku de pequeño'
              />
              <p className='font-[dragonBall]'>Personajes de Dragon Ball</p>
            </button>
            <button onClick={navigateToPlanets}>
              <img
                className='w-52 hover:scale-125 hover:rotate-180 transition-transform'
                src='/planets.jpg'
                alt='Dibujo de un planeta rojo de dibujos animados'
              />
              <p className='font-[dragonBall] '>Planetas de Dragon Ball</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectQuiz;
