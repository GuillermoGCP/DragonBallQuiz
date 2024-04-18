import useSelectQuiz from '../hooks/useSelectQuiz';

const SelectQuiz = () => {
  const { navigateToCharacters, navigateToPlanets } = useSelectQuiz();

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[80vw] mt-8'>
          <div className='instructions'>
            <h1 className='instructionsH1 font-[dragonBall] text-[#feb61b]'>
              Instrucciones
            </h1>
            <p className='instructionsText text-black font-thin'>
              Solo podrás cometer 7 errores o estás perdido, pero contarás con
              la ayuda del dragón mágico, que al activarlo, eliminará una de las
              opciones erróneas. Para lograr tenerlo de nuevo disponible debes
              reunir las siete bolas mágicas, respondiendo siete respuestas
              correctas consecutivas. Si fallas, las bolas se irán de nuevo a
              distintas partes del planeta. Y ojo, si se te acaba el tiempo, el
              dragón desaparecerá, así que úsalo cuando sea necesario.
            </p>
          </div>

          <div className='flex justify-center gap-16 items-center mt-8'>
            <button onClick={navigateToCharacters}>
              <div className='flex flex-col items-center justify-center'>
                <img
                  className='gokuButton w-48 hover:scale-105 transition-transform'
                  src='/Goku.jpg'
                  alt='Dibujo de Goku de pequeño'
                />
                <p className='gokuLettersButton font-[dragonBall]'>
                  Personajes de Dragon Ball
                </p>
              </div>
            </button>
            <button onClick={navigateToPlanets}>
              <div className='flex flex-col items-center justify-center'>
                <img
                  className='planetButton w-48 hover:scale-105 hover:rotate-180 transition-transform'
                  src='/planets.jpg'
                  alt='Dibujo de un planeta rojo de dibujos animados'
                />
                <p className='planetsLettersButton font-[dragonBall] '>
                  Planetas de Dragon Ball
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectQuiz;
