import { Link } from 'react-router-dom';

const SelectQuiz = () => {
  return (
    <>
      <h1>Selecciona el juego</h1>
      <p>
        Solo podrás cometer 7 errores o estás perdido, pero contarás con la
        ayuda del dragón mágico, que al activarlo, eliminará una de las opciones
        erróneas. Para lograr tenerlo de nuevo disposible debes reunir las siete
        bolas mágicas, respondiendo siete respuestas correctas consecutivas. Si
        fallas, las bolas se irán de nuevo a distintas partes del planeta. Y
        ojo, si se te acaba el tiempo, el dragón desaparecerá, así que úsalo
        cuando sea necesario.
      </p>
      <Link to={'/dragonball-quiz/characters'}>Personajes de Dragon Ball</Link>
      <Link to={'/dragonball-quiz/planets'}>
        Planetas del universo Dragon Ball
      </Link>
    </>
  );
};
export default SelectQuiz;
