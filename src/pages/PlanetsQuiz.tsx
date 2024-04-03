// // import useCharacterQuiz from '../hooks/useCharacterQuiz';
// import ButtonPanel from '../components/ButtonPanel';
// import FinalScore from '../components/FinalScore';
// import { ButtonPanelContext } from '../contexts/buttonPanelContext';
// import React from 'react';

// const PlanetsQuiz = () => {
//   // const {
//   //   setIndexState,
//   //   character,
//   //   randomIndex,
//   //   endOfTheGame,
//   //   setNewGame,
//   //   newGame,
//   // } = useCharacterQuiz();

//   // const nextCharacterData = {
//   //   setState: setIndexState,
//   //   setNewGame,
//   //   newGame,
//   //   randomIndex,
//   //   character,
//   // };
//   const { finalScore } = React.useContext(ButtonPanelContext);

//   const finalScoreData = {
//     points: finalScore,
//     numberOfQuestions: 20,
//   };
//   return (
//     <>
//       {character !== undefined ? (
//         <>
//           {newGame ? (
//             <>
//               <Character character={character} />
//               <ButtonPanel nextCharacterData={nextCharacterData} />
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => {
//                   setNewGame(true);
//                 }}
//               >
//                 Nueva partida
//               </button>
//               <FinalScore finalScoreData={finalScoreData} />
//             </>
//           )}
//         </>
//       ) : (
//         <p>{endOfTheGame}</p>
//       )}
//     </>
//   );
// };
// export default PlanetsQuiz;
