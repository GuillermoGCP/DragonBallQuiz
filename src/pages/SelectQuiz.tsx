import { Link } from 'react-router-dom';

const SelectQuiz = () => {
  return (
    <>
      <h1>Selecciona el juego</h1>
      <p>
        Solo podrás cometer 7 errores, pero contarás con la ayuda de la Onda
        Vital de Goku, que al activarla, eliminará una de las opciones erróneas.
        Para lograr activar de nuevo la Onda Vital debes responder siete
        respuestas consecutivas
      </p>
      <Link to={'/dragonball-quiz/characters'}>Personajes de Dragon Ball</Link>
      <Link to={'/dragonball-quiz/planets'}>
        Planetas del universo Dragon Ball
      </Link>
    </>
  );
};
export default SelectQuiz;
