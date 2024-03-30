import React from 'react';
import dragonBallJson from '../../dragonBall.json';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import { CharacterData as Data } from '../types.d';

interface nextCharacterData {
  setState: React.Dispatch<React.SetStateAction<number[]>>;
  randomIndex: number;
  character: Data;
}

const useButtonPanel = (nextCharacterData: nextCharacterData) => {
  const { setState, randomIndex, character } = nextCharacterData;
  const characterName = character.name;

  //Estado para mostrar el contador:
  const [count, setCount] = React.useState(30);

  //Estado para almacenar el intervalo:
  const [intervalId, setIntervalId] = React.useState<number | null>(null);

  //Estado para habilitar y desabilitar el botón next:
  const [disabledNextButton, setDisabledNextButton] = React.useState(false);

  //Estado para almacenar y mostrar la puntuación del jugador:
  const [points, setPoints] = React.useState<number>(0);

  //Estado para almacenar los fallos:
  const [failures, setFailures] = React.useState<number>(0);
  const {
    setResponse,
    setDisableButton,
    setButtonClickedIndexGreen,
    setButtonClickedIndexRed,
  } = React.useContext(ButtonPanelContext);

  //Opciones de los botones, dos respuestas aleatorias y la correcta:
  const responseOption = React.useMemo(() => {
    const firstOption = dragonBallJson[Math.floor(Math.random() * 29)].name;
    const secondOption = dragonBallJson[Math.floor(Math.random() * 58)].name;
    const correctAnswer = characterName;
    const options = [firstOption, secondOption, correctAnswer];
    return options.sort(() => Math.random() - 0.5);
  }, [characterName]);

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
    setDisabledNextButton(true);

    //Activa el contador para la siguiente pregunta:
    let counter = 30;
    const interval = setInterval(() => {
      counter--;
      setCount(counter);
      if (counter === 0) {
        clearInterval(interval);
        setDisabledNextButton(false);
      }
    }, 1000);
    setIntervalId(interval);
  };

  //Handler del botón clicado:
  const responseHandler = (index: number) => {
    if (responseOption[index] === characterName) {
      let gamerPoints = points;
      gamerPoints++;
      setPoints(gamerPoints);
      setResponse('Has acertado');
      setDisableButton(true);
      setButtonClickedIndexGreen(index);
      setDisabledNextButton(false);
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      let gamerFailures = failures;
      gamerFailures++;
      setFailures(gamerFailures);

      if (failures === 5) {
        setResponse('Fin del juego');
        setDisabledNextButton(true);
        setDisableButton(true);
        if (intervalId) {
          clearInterval(intervalId);
        }
      } else {
        setResponse('Has fallado');
        setDisabledNextButton(false);
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
  };
};
export default useButtonPanel;
