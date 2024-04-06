import { ReactNode } from 'react';

interface button {
  handler: {
    nextCharacter: () => void | boolean;
    disabledNextButton?: string;
  };
  children: ReactNode;
}
const Button = ({ handler, children }: button) => {
  const { nextCharacter, disabledNextButton } = handler;
  return (
    <button
      className={`font-bold text-gray-500 ${disabledNextButton}`}
      type='submit'
      onClick={nextCharacter}
    >
      {children}
    </button>
  );
};
export default Button;
