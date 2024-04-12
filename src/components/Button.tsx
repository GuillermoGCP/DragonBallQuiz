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
      className={`font-bold text-gray-500 ${disabledNextButton} `}
      type='submit'
      onClick={nextCharacter}
    >
      <div className='flex  flex-col items-center'>
        {children}
        <img
          src='/nube.png'
          alt='Imagen de la nube de SonGoku'
          className='w-16 hover:scale-110 hover:rotate-3'
        />
      </div>
    </button>
  );
};
export default Button;
