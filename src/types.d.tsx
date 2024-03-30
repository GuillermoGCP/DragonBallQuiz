//MAIN DATA
export interface CharacterData {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
}
export interface Props {
  character: CharacterData;
}

//CONTEXT
export interface ButtonPanelProps {
  children: React.ReactNode;
}

export interface ButtonPanelContextType {
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  disableButton: boolean;
  setDisableButton: React.Dispatch<React.SetStateAction<boolean>>;
  buttonClickedIndexGreen: number | null;
  setButtonClickedIndexGreen: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  buttonClickedIndexRed: number | null;
  setButtonClickedIndexRed: React.Dispatch<React.SetStateAction<number | null>>;
}
