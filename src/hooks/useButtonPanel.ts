import React from 'react';
import dragonBallCharactersJson from '../../dragonBallCharacters.json';
import dragonBallPlanetsJson from '../../dragonBallPlanets.json';
import { CharacterData, PlanetsData } from '../types.d';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';

type nextCharacterData = {
  setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<number[]>>;
  randomIndex: number;
  character?: CharacterData;
  planet?: PlanetsData;
};

const useButtonPanel = (nextCharacterData: nextCharacterData) => {
  const { setState, randomIndex, character, planet, setNewGame } =
    nextCharacterData;

  const characterName = character?.name;
  const planetName = planet?.name;

  const { setFinalScore } = React.useContext(ButtonPanelContext);

  //Estado para mostrar el contador:
  const [count, setCount] = React.useState(30);

  //Estado para almacenar el intervalo del botón:
  const [intervalId, setIntervalId] = React.useState<number | null>(null);

  //Estado para el intervalo inicial:
  const [initialIntervalId, setInitialIntervalId] = React.useState<
    number | null
  >(null);

  //Estado para mostrar u ocultar el botón next:
  const [disabledNextButton, setDisabledNextButton] = React.useState('');

  //Estado para almacenar los fallos:
  const [failures, setFailures] = React.useState<number>(0);

  //Estado para la respuesta a la elección del jugador:
  const [response, setResponse] = React.useState<string>('');

  //Estado para desabilitar el panel de botones:
  const [disableButton, setDisableButton] = React.useState<boolean>(false);

  //Estado para pintar de verde la respuesta correcta:
  const [buttonClickedIndexGreen, setButtonClickedIndexGreen] = React.useState<
    number | null
  >(null);

  //Estado para pintar de rojo la respuesta incorrecta:
  const [buttonClickedIndexRed, setButtonClickedIndexRed] = React.useState<
    number | null
  >(null);

  //Estado para almacenar y mostrar la puntuación del jugador:
  const [points, setPoints] = React.useState<number>(0);

  //Opciones de los botones, dos respuestas aleatorias y la correcta:
  const responseOption = React.useMemo(() => {
    let firstOption;
    character
      ? (firstOption =
          dragonBallCharactersJson[Math.floor(Math.random() * 29)].name)
      : (firstOption =
          dragonBallPlanetsJson[Math.floor(Math.random() * 10)].name);

    let secondOption;
    character
      ? (secondOption =
          dragonBallCharactersJson[Math.floor(Math.random() * 29 + 29)].name)
      : (secondOption =
          dragonBallPlanetsJson[Math.floor(Math.random() * 10 + 10)].name);

    let correctAnswer;
    character ? (correctAnswer = characterName) : (correctAnswer = planetName);

    const options = [firstOption, secondOption, correctAnswer];

    return options.sort(() => Math.random() - 0.5);
  }, [characterName, planetName, character]);

  //Contador inicial, al cargarse la página:
  React.useEffect(() => {
    setDisableButton(false);
    setDisabledNextButton('hidden');
    let counter = 30;
    const InitialInterval = setInterval(() => {
      counter--;
      setCount(counter);
      if (counter === 0) {
        clearInterval(InitialInterval);
        setFailures(failures + 1);
        setDisabledNextButton('');
        setDisableButton(true);
        setResponse(`¡Se terminó el tiempo!`);
      }
    }, 1000);
    setInitialIntervalId(InitialInterval);

    //Esto es para cuando se desmonta el componente:
    return () => clearInterval(InitialInterval);
  }, [setDisableButton, setResponse]);

  //Botón del siguiente personaje:
  const nextCharacter = () => {
    //Guarda en el estado el index aleatorio, para eliminarlo del array de índices disponibles para la siguiente vuelta.
    setState((prevIndex) => [...prevIndex, randomIndex]);

    //Resetea los colores de los botones y los desbloquea para la siguiente pregunta:
    setResponse('');
    setDisableButton(false);
    setButtonClickedIndexGreen(null);
    setButtonClickedIndexRed(null);

    //Desactivo el botón hasta que acabe el contador o se clique en alguna respuesta:
    setDisabledNextButton('hidden');

    //Activa el contador para la siguiente pregunta:
    let counter = 30;
    const interval = setInterval(() => {
      counter--;
      setCount(counter);
      if (counter === 0) {
        setFailures(failures + 1);
        clearInterval(interval);
        setDisabledNextButton('');
        setDisableButton(true);
        setResponse(`¡Se terminó el tiempo!`);
      }
    }, 1000);
    setIntervalId(interval);
  };

  //Handler del botón clicado:
  const responseHandler = (index: number) => {
    if (
      responseOption[index] === characterName ||
      responseOption[index] === planetName
    ) {
      let gamerPoints = points;
      gamerPoints++;
      setPoints(gamerPoints);
      setResponse(`Has acertado`);
      setDisableButton(true);
      setButtonClickedIndexGreen(index);
      setDisabledNextButton('');

      //Limpio el intervalo automático:
      if (initialIntervalId) {
        clearInterval(initialIntervalId);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      let gamerFailures = failures;
      gamerFailures++;
      setFailures(gamerFailures);

      //Cuando se termina el juego por haber fallado:
      if (failures === 5) {
        setFinalScore(points);
        setResponse('Fin del juego');
        setNewGame(false);
        setDisabledNextButton('hidden');
        setDisableButton(true);
        if (intervalId) {
          clearInterval(intervalId);
        }
      } else {
        //Limpio el intervalo automático
        if (initialIntervalId) {
          clearInterval(initialIntervalId);
        }
        setResponse('Has fallado');
        setDisabledNextButton('');
        if (intervalId) {
          clearInterval(intervalId);
        }

        setDisableButton(true);
        setButtonClickedIndexRed(index);
      }
    }
  };

  return {
    responseHandler,
    responseOption,
    nextCharacter,
    count,
    disabledNextButton,
    points,
    failures,
    response,
    disableButton,
    buttonClickedIndexGreen,
    buttonClickedIndexRed,
  };
};
export default useButtonPanel;
