import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { App } from './pages/App';
import { OurStory } from './pages/OurStory';
import { ErrorPage } from './pages/ErrorPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'ourstory',
        element: <OurStory />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
