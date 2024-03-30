import React from 'react';
import { ButtonPanelProps, ButtonPanelContextType } from '../types.d';

const ButtonPanelContext = React.createContext<ButtonPanelContextType>(
  {} as ButtonPanelContextType
);

const ButtonPanelProvider = ({ children }: ButtonPanelProps) => {
  const [response, setResponse] = React.useState<string>('');
  const [disableButton, setDisableButton] = React.useState<boolean>(false);
  const [buttonClickedIndexGreen, setButtonClickedIndexGreen] = React.useState<
    number | null
  >(null);
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
