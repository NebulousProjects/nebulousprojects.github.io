import { NavBar, Page } from "../navbar/NavBar";
import "./Homepage.css";
import flavor from "../image/minecraft-flavor.png";
import { Colors } from "../Colors";
import { TopicList } from "../utils/Topics";
import { Header } from "../utils/Header";

export function Homepage() {
    let topics = [
        {
            title: "Infrastructure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
            image: flavor
        },
        {
            title: "Servers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
            image: flavor
        },
        {
            title: "Games",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
            image: flavor
        },
    ];

    return <div style={{ backgroundColor: Colors.blue }}>
        <NavBar page={ Page.Home } />
        
        {/* Flavor image + title */}
        <Header
            title="Daylin"
            subtitle="Software House"
            description="Infrastructure | Servers | Games"
            image={flavor}
        />
        
        {/* Company topics */}
        <TopicList topics={topics}/>

        {/* Footer */}
    </div>;
}