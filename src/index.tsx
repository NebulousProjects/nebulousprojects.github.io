import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import { NavBar, Page } from "./navbar/NavBar";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar page={ Page.Home } />

      {/* Random react bs */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
