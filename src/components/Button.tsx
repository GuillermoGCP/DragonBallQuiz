interface button {
  handler: {
    nextCharacter: () => void | boolean;
    disabledNextButton?: string;
  };
  children: string;
}
const Button = ({ handler, children }: button) => {
  const { nextCharacter, disabledNextButton } = handler;
  return (
    <button
      className={disabledNextButton}
      type='submit'
      onClick={nextCharacter}
    >
      {children}
    </button>
  );
};
export default Button;
