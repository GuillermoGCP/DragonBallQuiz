import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData, PlanetsData } from '../types.d';
import Button from './Button';
import {
  redButtonStyle,
  greenButtonStyle,
  basicButtonStyle,
  // ondaActivatedStyle,
  // ondaDesactivatedStyle,
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
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center mb-4'>
          {finalBalls.map((ball, index) => (
            <img
              key={index}
              className='w-6 mr-2'
              src={ball}
              alt={`Ball ${index}`}
            />
          ))}
        </div>
        <p>{`Tiempo restante: ${count}`}</p>
        <p>{`Tienes ${points} puntos`}</p>
        <p>{`Tienes ${failures} fallos`}</p>
        <button
          // className={
          //   ondaDesactivatedButton ? ondaActivatedStyle : ondaDesactivatedStyle
          // }
          disabled={ondaDesactivatedButton}
          onClick={twoButtons}
          className='relative'
        >
          {!ondaDesactivatedButton && (
            <img className='w-16 rounded-full' src='/dragon.jpg' alt='Dragon' />
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
                  } ${buttonClickedIndexRed === index && redButtonStyle} mt-2`}
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
                } ${buttonClickedIndexRed === index && redButtonStyle} mt-2`}
              >
                {optionToPrint}
              </button>
            );
          })
        )}
      </div>
      <div className='flex flex-col items-center mt-2'>
        <p>{failOrSuccessfulMessage}</p>
        <Button handler={buttonData}>Siguiente Personaje</Button>{' '}
      </div>
    </>
  );
};
export default ButtonPanel;
