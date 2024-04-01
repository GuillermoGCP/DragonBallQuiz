import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData as Data } from '../types.d';
import { ButtonPanelContext } from '../contexts/buttonPanelContext';
import Button from './Button';
import FinalScore from './FinalScore';

interface Props {
  nextCharacterData: {
    newGame: boolean;
    setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    randomIndex: number;
    character: Data;
  };
}

interface buttonDataProps {
  disabledNextButton: string;
  nextCharacter: () => void;
}

const ButtonPanel = ({ nextCharacterData }: Props) => {
  const {
    responseHandler,
    responseOption,
    nextCharacter,
    disabledNextButton,
    count,
    points,
    failures,
  } = useButtonPanel(nextCharacterData);

  const buttonData: buttonDataProps = { disabledNextButton, nextCharacter };

  const {
    response: failOrSuccessfulMessage,
    disableButton,
    buttonClickedIndexGreen,
    buttonClickedIndexRed,
  } = React.useContext(ButtonPanelContext);

  const redButtonStyle: string = 'border p-3 m-2 bg-red-700';
  const greenButtonStyle: string = 'border p-3 m-2 bg-green-700';
  const basicButtonStyle: string = 'border p-3 m-2 hover:border-black';

  return (
    <>
      <>
        <div>
          <p>{`Tiempo restante: ${count}`}</p>
          <p>{`Tienes ${points} puntos`}</p>
          <p>{`Tienes ${failures} fallos`}</p>
          {responseOption.map((option, index) => (
            <button
              key={index}
              disabled={disableButton}
              onClick={() => responseHandler(index)}
              className={`${basicButtonStyle} ${
                buttonClickedIndexGreen === index && greenButtonStyle
              } ${buttonClickedIndexRed === index && redButtonStyle}`}
            >
              {option}
            </button>
          ))}
        </div>
        <p>{failOrSuccessfulMessage}</p>
        <Button handler={buttonData}>Siguiente Personaje</Button>{' '}
      </>

      <FinalScore points={points} />
    </>
  );
};
export default ButtonPanel;
