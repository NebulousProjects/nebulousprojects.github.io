import { TiThMenu  } from 'react-icons/ti';
import { RiCloseLargeFill } from "react-icons/ri";
import { Colors } from "../Colors";
import { useState } from 'react';
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';

export enum Page {
  Home,
  Projects,
  Contact
}

interface NavBarInput {
  page: Page
}

interface SwapStyleInput {
  text: string,
  location: string,
  condition: boolean,
}

function NavBarButton(input: SwapStyleInput) {
  const nav = useNavigate();
  
  if (input.condition) { 
    return <div 
      className="navbar-button-text1 remove-button-background"
      style={{ backgroundColor: Colors.blue, color: Colors.offwhite }}
    >{ input.text }</div>
  } else {
    return <button 
      className="navbar-button-text2 remove-button-background" 
      style={{ color: Colors.black }}
      onClick={() => nav("/" + input.location)}
    >{ input.text }</button>
  }
}

function NavList(input: NavBarInput) {
  return <>
    <NavBarButton 
      condition={ input.page === Page.Home }
      text="Home"
      location=""
    />

    <div style={{ width: "0.25em" }} />

    <NavBarButton 
      condition={ input.page === Page.Projects }
      text="Projects"
      location="projects"
    />
      
    <div style={{ width: "0.25em" }} />

    <NavBarButton 
      condition={ input.page === Page.Contact }
      text="Contact"
      location="contact"
    />
  </>;
}

function BurgerMenu(input: NavBarInput) {
  return <div className="navbar-burger-list" style={{ backgroundColor: Colors.offwhite }} >
    <NavList page={input.page} />
  </div>
}

export function NavBar(input: NavBarInput) {
  const [isBurger, setBurger] = useState(false);

  const Burger = <TiThMenu className="navbar-burger" />;
  const Close = <RiCloseLargeFill className="navbar-burger" />

  return <>
    <div className="navbar-main-left navbar-split-only" style={{ backgroundColor: Colors.offwhite }} >
      <div className="navbar-header-text1" >Nebulous</div>
      <div style={{ width: "0.5em" }} />
      <div className="navbar-header-text2" >Software House</div>
    </div>

    <div className="navbar-main-right navbar-split-only" style={{ backgroundColor: Colors.offwhite }}  >
      <NavList page={input.page} />
    </div>

    <div className="navbar-main-right navbar-merged-only" style={{ backgroundColor: Colors.offwhite }} >
      {/* Title */}
      <div className="navbar-header-text1" >Nebulous</div>
      <div style={{ width: "0.5em" }} />
      <div className="navbar-header-text2" >Software House</div>
      <div style={{ width: "0.5em" }} />

      {/* Burger */}
      <button 
        className="remove-button-background" 
        onClick={() => setBurger(!isBurger)}
      >
        { isBurger ? Close : Burger }
      </button>

      {/* Optional burger menu */}
      { isBurger && <BurgerMenu page={input.page} /> }
    </div>
  </>;
}