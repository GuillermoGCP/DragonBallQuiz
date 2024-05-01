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

export interface PlanetsData {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
}

export interface CharacterPlanetProps {
  character: CharacterData | PlanetsData;
}

//CONTEXT
export interface ButtonPanelProps {
  children: React.ReactNode;
}

export interface ButtonPanelContextType {
  finalScore: number;
  setFinalScore: React.Dispatch<React.SetStateAction<number>>;
}
export interface MusicContextType {
  isSongPlaying: boolean;
  setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  quizPanel: boolean;
  setQuizPanel: React.Dispatch<React.SetStateAction<boolean>>;
  playInitialSong: () => void;
  stopInitialSong: () => void;
  initialSong: HTMLAudioElement;
  gameLost: HTMLAudioElement;
}

//Props que se le pasan al botón next:
export interface nextCharacterData {
  setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<number[]>>;
  randomIndex: number;
  character?: CharacterData;
  planet?: PlanetsData;
  setGameEndedState?: React.Dispatch<React.SetStateAction<boolean>>;
  newGame: boolean;
}
