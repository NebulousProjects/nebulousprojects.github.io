import { NavBar, Page } from "../navbar/NavBar";
import logo from "../logo.svg";
import "./Homepage.css";

export function Homepage() {
    return <div className="App">
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
    </div>;
}