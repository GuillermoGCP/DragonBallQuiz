import React from 'react';
import { ButtonPanelProps, ButtonPanelContextType } from '../types.d';

const ButtonPanelContext = React.createContext<ButtonPanelContextType>(
  {} as ButtonPanelContextType
);

const ButtonPanelProvider = ({ children }: ButtonPanelProps) => {
  //Estado con la puntuación final, que solo se actualiza cuando termina la partida:
  const [finalScore, setFinalScore] = React.useState(0);

  return (
    <ButtonPanelContext.Provider value={{ finalScore, setFinalScore }}>
      {children}
    </ButtonPanelContext.Provider>
  );
};

export { ButtonPanelProvider, ButtonPanelContext };
