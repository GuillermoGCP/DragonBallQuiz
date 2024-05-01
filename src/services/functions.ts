/* CHARACTER QUIZ*/

//Selecciona un índice aleatorio de un array de números:
export function shuffleArray(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Luego de seleccionar un índice, añadirlo al estado y pintar el elemento 0 del json, este método crea un array con todos los indices menos el seleccionado, para que no vuelva a salir.
export const deleteIndex = (state: number[], jsonLength: number) => {
  const allIndex = Array.from({ length: jsonLength }, (_, index) => index);
  const availableIndex = allIndex.filter((index) => !state.includes(index));
  return availableIndex;
};

//Generar un número aleatorio y evitar que se repita con uno previamente calculado:
export function generateUniqueIndex(dataLength: number, previousIndex: number) {
  let newIndex = Math.floor(Math.random() * dataLength);
  while (newIndex === previousIndex) {
    newIndex = Math.floor(Math.random() * dataLength);
  }
  return newIndex;
}
