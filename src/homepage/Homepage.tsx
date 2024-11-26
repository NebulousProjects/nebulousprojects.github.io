import { NavBar, Page } from "../navbar/NavBar";

import "./Homepage.css";
import flavor from "../image/minecraft-flavor.png";
import { Colors } from "../Colors";

export function Homepage() {
    return <div style={{ backgroundColor: Colors.blue }}>
        <NavBar page={ Page.Home } />
        
        {/* Flavor image + title */}
        <div className="flavor-img">
            <img src={flavor} alt="" style={{ height: "140vh" }} />

            <div className="title-text">Daylin</div>
            <div className="title-text2">Software House</div>
            <div className="title-subtext">Infrastructure | Servers | Games</div>
        </div>
        
        {/* Company topics */}

        {/* Footer */}
    </div>;
}