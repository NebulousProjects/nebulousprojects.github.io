import { NavBar, Page } from "../navbar/NavBar";
import { Header } from "../utils/Header";
import flavor from "../image/minecraft-flavor.png";
import { Colors } from "../Colors";
import { TopicList } from "../utils/Topics";

export function Projects() {
    return <div style={{ backgroundColor: Colors.blue }} >
        <NavBar 
            page={ Page.Projects } 
        />

        <Header 
            title="Daylin"
            subtitle="Software House"
            description="Projects"
            image={flavor}
        />

        <TopicList
            topics={[
                {
                    title: "Storm Engine",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
                    image: flavor
                },
                {
                    title: "Project Helios",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
                    image: flavor
                },
                {
                    title: "Open Source",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ex arcu, non aliquet sapien tempor vel. Sed fringilla vulputate ante, eget eleifend orci fringilla sed. Praesent eleifend augue purus, at ornare risus pretium id. Vivamus ut iaculis metus, vitae bibendum dolor. Integer sollicitudin risus erat, vitae iaculis lorem suscipit ornare.",
                    image: flavor
                }
            ]}
        />
    </div>
}