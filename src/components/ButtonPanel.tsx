import React from 'react';
import useButtonPanel from '../hooks/useButtonPanel';
import { CharacterData, PlanetsData } from '../types.d';
import Button from './Button';
import '../assets/landScapeStyles.css';
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
    <main className='buttonPanel flex justify-center h-[77%]'>
      <div className='buttonPanelYellowBox yellowBox bg-gradient-to-t from-[#e8a20a] to-white h-[100%] w-[440px] sm:w-[535px] lg:w-[535px]'>
        <div className='h-6 flex justify-center'>
          {dragonDesactivatedButton &&
            finalBalls.map((ball, index) => (
              <img
                key={index}
                className='w-6 mr-2 '
                src={ball}
                alt={`Ball ${index}`}
              />
            ))}
        </div>
        <div className='points flex justify-center'>
          <p className='points font-bold text-gray-500 mx-3 '>{`Tiempo: ${count}`}</p>
          <p className=' pointsfont-bold text-green-700 mx-3'>{`${points} punto/s`}</p>
          <p className=' points font-bold text-[#b53434] mx-3 '>{`${failures} fallo/s`}</p>
        </div>
        <div className='flex justify-center items-center my-8'>
          <div className='mr-8'>
            <button disabled={dragonDesactivatedButton} onClick={twoButtons}>
              {!dragonDesactivatedButton && (
                <div className='flex flex-col items-center ml-4'>
                  <img
                    className='w-24 dragon hover:scale-110 transition'
                    src='/dragon.png'
                    alt='Dragon'
                  />

                  <p className='font-bold text-gray-500'>
                    ¡Activa el dragón mágico!
                  </p>
                </div>
              )}
            </button>
          </div>

          <div className='flex flex-col items-center justify-center mr-10 buttonBox'>
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
        <div className=' nextMessage flex flex-col items-center '>
          <p className='font-bold text-gray-500 '>{failOrSuccessfulMessage}</p>
          <Button handler={buttonData}>
            {character ? ' Siguiente Personaje' : 'Siguiente planeta'}
          </Button>
        </div>
      </div>
    </main>
  );
};
export default ButtonPanel;
