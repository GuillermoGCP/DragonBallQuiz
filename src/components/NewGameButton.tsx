import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  handler: () => void;
};
const NewGameButton = ({ children, handler }: Props) => {
  return <button onClick={handler}>{children}</button>;
};
export default NewGameButton;
