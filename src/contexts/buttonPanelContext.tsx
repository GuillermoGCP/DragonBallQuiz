import React from 'react';
import { ButtonPanelProps, ButtonPanelContextType } from '../types.d';

const ButtonPanelContext = React.createContext<ButtonPanelContextType>(
  {} as ButtonPanelContextType
);

const ButtonPanelProvider = ({ children }: ButtonPanelProps) => {
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

  return (
    <ButtonPanelContext.Provider
      value={{
        response,
        setResponse,
        disableButton,
        setDisableButton,
        buttonClickedIndexGreen,
        setButtonClickedIndexGreen,
        buttonClickedIndexRed,
        setButtonClickedIndexRed,
      }}
    >
      {children}
    </ButtonPanelContext.Provider>
  );
};

export { ButtonPanelProvider, ButtonPanelContext };
