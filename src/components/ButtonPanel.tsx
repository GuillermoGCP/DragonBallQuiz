import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData, PlanetsData } from '../types.d';
import Button from './Button';
import {
  redButtonStyle,
  greenButtonStyle,
  basicButtonStyle,
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
  const { character } = nextCharacterData;
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
    ondaDesactivatedButton: dragonDesactivatedButton,
    finalBalls,
  } = useButtonPanel(nextCharacterData);

  const buttonData: buttonDataProps = { disabledNextButton, nextCharacter };

  return (
    <>
      <div className='bg-gradient-to-t from-[#e8a20a] to-white h-[44vh]'>
        <div className='h-6 flex justify-center'>
          {dragonDesactivatedButton &&
            finalBalls.map((ball, index) => (
              <img
                key={index}
                className='w-6 mr-2'
                src={ball}
                alt={`Ball ${index}`}
              />
            ))}
        </div>
        <div className='flex justify-between'>
          <p className='font-bold text-gray-500 mx-3'>{`Tiempo restante: ${count}`}</p>
          <p className='font-bold text-gray-500 mx-3'>{`${points} punto/s`}</p>
          <p className='font-bold text-gray-500 mx-3'>{`${failures} fallo/s`}</p>
        </div>
        <div className='flex justify-center items-center my-8'>
          <div className='mr-10'>
            <button disabled={dragonDesactivatedButton} onClick={twoButtons}>
              {!dragonDesactivatedButton && (
                <div className='flex flex-col items-center'>
                  <img
                    className='w-14 rounded-full'
                    src='/dragon.jpg'
                    alt='Dragon'
                  />
                  <p>Dragón invocado</p>
                </div>
              )}
            </button>
          </div>

          <div className='flex flex-col items-center justify-center '>
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
                      } ${
                        buttonClickedIndexRed === index && redButtonStyle
                      } mt-2`}
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
                    } ${
                      buttonClickedIndexRed === index && redButtonStyle
                    } mt-2`}
                  >
                    {optionToPrint}
                  </button>
                );
              })
            )}
          </div>
        </div>
        <div className='flex justify-around mt-2'>
          <p className='font-bold text-gray-500'>{failOrSuccessfulMessage}</p>
          <Button handler={buttonData}>
            {character ? ' Siguiente Personaje' : 'Siguiente planeta'}
          </Button>
        </div>
      </div>
    </>
  );
};
export default ButtonPanel;
