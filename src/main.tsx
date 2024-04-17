import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Base from './pages/Base';
import SelectQuiz from './pages/SelectQuiz';
import PageNotFound from './pages/PageNotFound';
import CharactersQuiz from './pages/CharactersQuiz';
import PlanetsQuiz from './pages/PlanetsQuiz';
import { ButtonPanelProvider } from './contexts/buttonPanelContext';
import { MusicProvider } from './contexts/musicContext';

const router = createBrowserRouter([
  {
    path: '',
    element: <Base />,
    children: [
      { path: 'dragonball-quiz', element: <SelectQuiz /> },
      { path: 'dragonball-quiz/characters', element: <CharactersQuiz /> },
      { path: 'dragonball-quiz/planets', element: <PlanetsQuiz /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MusicProvider>
      <ButtonPanelProvider>
        <RouterProvider router={router} />
      </ButtonPanelProvider>
    </MusicProvider>
  </React.StrictMode>
);
