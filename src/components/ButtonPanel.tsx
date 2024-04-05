import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData, PlanetsData } from '../types.d';
import Button from './Button';

interface buttonPanelProps {
  nextCharacterData: {
    newGame: boolean;
    setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    randomIndex: number;
    character?: CharacterData;
    planet?: PlanetsData;
  };
}

interface buttonDataProps {
  disabledNextButton: string;
  nextCharacter: () => void;
}

const ButtonPanel = ({ nextCharacterData }: buttonPanelProps) => {
  const {
    responseHandler,
    responseOption,
    nextCharacter,
    disabledNextButton,
    count,
    points,
    failures,
    response: failOrSuccessfulMessage,
    disableButton,
    buttonClickedIndexGreen,
    buttonClickedIndexRed,
    showOnlyTwoButtons,
    twoButtons,
    ondaDesactivatedButton,
  } = useButtonPanel(nextCharacterData);

  const buttonData: buttonDataProps = { disabledNextButton, nextCharacter };

  const redButtonStyle: string = 'border p-3 m-2 bg-red-700';
  const greenButtonStyle: string = 'border p-3 m-2 bg-green-700';
  const basicButtonStyle: string = 'border p-3 m-2 hover:border-black';
  const ondaActivatedStyle: string = 'border p-3 m-2 bg-orange-700';
  const ondaDesactivatedStyle: string = 'border p-3 m-2 bg-blue-700';

  return (
    <>
      <div>
        <p>{`Tiempo restante: ${count}`}</p>
        <p>{`Tienes ${points} puntos`}</p>
        <p>{`Tienes ${failures} fallos`}</p>
        <button
          className={
            ondaDesactivatedButton ? ondaActivatedStyle : ondaDesactivatedStyle
          }
          disabled={ondaDesactivatedButton}
          onClick={twoButtons}
        >
          Onda Vital🖐
        </button>

        {!showOnlyTwoButtons ? (
          <>
            {responseOption.map((option, index) => {
              const optionToPrint = Object.values(option)[0];

              return (
                <button
                  key={index}
                  disabled={disableButton}
                  onClick={() => responseHandler(index)}
                  className={`${basicButtonStyle} ${
                    buttonClickedIndexGreen === index && greenButtonStyle
                  } ${buttonClickedIndexRed === index && redButtonStyle}`}
                >
                  {optionToPrint}
                </button>
              );
            })}
          </>
        ) : (
          responseOption.map((option, index) => {
            const optionToPrint = Object.values(option)[0];
            return (
              <button
                key={index}
                disabled={disableButton}
                onClick={() => responseHandler(index)}
                className={`${basicButtonStyle} ${
                  buttonClickedIndexGreen === index && greenButtonStyle
                } ${buttonClickedIndexRed === index && redButtonStyle}`}
              >
                {optionToPrint}
              </button>
            );
          })
        )}
      </div>
      <p>{failOrSuccessfulMessage}</p>
      <Button handler={buttonData}>Siguiente Personaje</Button>{' '}
    </>
  );
};
export default ButtonPanel;
