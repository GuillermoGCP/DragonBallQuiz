import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData, PlanetsData } from '../types.d';
import Button from './Button';
import {
  redButtonStyle,
  greenButtonStyle,
  basicButtonStyle,
  ondaActivatedStyle,
  ondaDesactivatedStyle,
} from '../utils/styles';

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
    finalBalls,
  } = useButtonPanel(nextCharacterData);

  const buttonData: buttonDataProps = { disabledNextButton, nextCharacter };

  return (
    <>
      <div>
        {finalBalls.map((ball) => (
          <img className='w-6 inline' src={ball} />
        ))}
        <p>{`Tiempo restante: ${count}`}</p>
        <p>{`Tienes ${points} puntos`}</p>
        <p>{`Tienes ${failures} fallos`}</p>
        <button
          // className={
          //   ondaDesactivatedButton ? ondaActivatedStyle : ondaDesactivatedStyle
          // }
          disabled={ondaDesactivatedButton}
          onClick={twoButtons}
        >
          {!ondaDesactivatedButton && (
            <img className='w-16 rounded-full' src='/dragon.jpg' />
          )}
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
