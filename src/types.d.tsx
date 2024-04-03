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
  finalScore: number;
  setFinalScore: React.Dispatch<React.SetStateAction<number>>;
}
