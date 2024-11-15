import { Colors } from "../Colors";
import "./NavBar.css";

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
  condition: boolean,
}

function NavBarButton(input: SwapStyleInput) {
  if (input.condition) { 
    return <div 
      className="navbar-button-text1"
      style={{ backgroundColor: Colors.blue, color: Colors.offwhite }}
    >{ input.text }</div>
  } else {
    return <button 
      className="navbar-button-text2" 
      onClick={{ console.log("Clicked button") }}
      style={{ color: Colors.black }}
    >{ input.text }</button>
  }
}

export function NavBar(input: NavBarInput) {
  return <>
    <div className="navbar-main-left" style={{ backgroundColor: Colors.offwhite }} >
      <div className="navbar-header-text1" >Nebulous</div>
      <div style={{ width: "0.5em" }} />
      <div className="navbar-header-text2" >Software House</div>
    </div>

    <div className="navbar-main-right" style={{ backgroundColor: Colors.offwhite }}  >
      <NavBarButton 
        condition={ input.page === Page.Home }
        text="Home"
      />

      <div style={{ width: "0.25em" }} />

      <NavBarButton 
        condition={ input.page === Page.Projects }
        text="Projects"
      />
      
      <div style={{ width: "0.25em" }} />

      <NavBarButton 
        condition={ input.page === Page.Contact }
        text="Contact"
      />
    </div>
  </>;
}