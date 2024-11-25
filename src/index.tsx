import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage } from './homepage/Homepage';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "projects",
    element: <Projects/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
