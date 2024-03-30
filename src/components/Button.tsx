interface button {
  handler: {
    nextCharacter: () => void;
    disabledNextButton: boolean;
  };
  children: string;
}
const Button = ({ handler, children }: button) => {
  const { nextCharacter, disabledNextButton } = handler;
  return (
    <button disabled={disabledNextButton} type='submit' onClick={nextCharacter}>
      {children}
    </button>
  );
};
export default Button;
